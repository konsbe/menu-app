
interface MenuItem {
    sheet_name: string;
    rows?: string[][];
}

interface Menu {
    [key: string]: {
        [key: string]: { name: string; value: string }[];
    };
}

export const convertMenuItemsToMenu = (menuItems: MenuItem[]): Menu => {
    const menu: Menu = {};

    menuItems.forEach(menuItem => {
        const sheetName = menuItem.sheet_name;
        const rows = menuItem.rows || [];

        const categoryMap: { [key: string]: { name: string; value: string }[] } = {};

        rows.forEach((row, index) => {
            if (index === 0) return; // Skip header row

            const categoryName = row[0];
            if (!categoryMap[categoryName]) {
                categoryMap[categoryName] = [];
            }

            categoryMap[categoryName].push({ name: row[1], value: row[3] });
        });

        menu[sheetName] = categoryMap;
    });

    return menu;
};
