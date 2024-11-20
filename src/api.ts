export async function fetchGET<T>(url: string): Promise<T | undefined> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Unable to Fetch Data, Please check URL
                or Network connectivity!!`
      );
    }
    const data = await response.json();

    return data.results[0];
  } catch (error) {
    console.warn("Some Error Occured:", error);
  }
}

export const fetchData = async () => {
  const data = await fetchGET("http://127.0.0.1:8002/read_xlsx");

  return data;
};
