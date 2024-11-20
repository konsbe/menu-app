import { useEffect, useState } from "react";
import { fetchData } from "../api";
interface SheetData {
  sheet_name: string;
  rows: string[][];
}

const useGooglEXlsxHook = () => {
  const [data, setData] = useState<SheetData[]>([]);
  
  const readGoogleSheets = async (): Promise<SheetData[]> => {
    const sheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
    // useGoogleDriveAPI();
      const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?fields=sheets.properties.title,sheets.data.rowData.values&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data, status: ${response.status}`);
      }
      const data = await response.json();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sheetsData: SheetData[] = data.sheets.map((sheet: any) => {
        const sheetName: string = sheet.properties.title;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const rows: string[][] = sheet?.data[0]?.rowData?.map((row: any) => {
          return row.values.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (cell: any) =>
              (cell.effectiveValue &&
                (cell.effectiveValue.stringValue || cell.formattedValue)) ||
              ""
          );
        });
        return { sheet_name: sheetName, rows };
      });

      return sheetsData;
    } catch (error) {
      const sheetsData = (await fetchData()) as Promise<SheetData[]>;
      return (await sheetsData) ? sheetsData : [];
    }
  };

  useEffect(() => {
    readGoogleSheets().then((res) => {
      setData(res);
      return res;
    });
  }, []);

  return { data };
};

export default useGooglEXlsxHook;
