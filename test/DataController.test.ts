import { DataController } from "@/lib/DataController";

describe("DataController", () => {
  test("Contructor should construct", () => {
    const dataController = new DataController();
    expect(dataController).toBeDefined();
  });

  test("Contructor should construct with dataPath", () => {
    const dataController = new DataController("test/data/draws");
    expect(dataController).toBeDefined();
  });

  test("Load file", async () => {
    const dataController = new DataController("test/data/draws");
    await dataController.loadFiles();
    expect(dataController).toBeDefined();
  });

  test("Get years", async () => {
    const dataController = new DataController("test/data/draws");
    await dataController.loadFiles();

    const years = dataController.getYears();

    expect(dataController).toBeDefined();
    expect(years).toBeDefined();
    expect(years.length).toBeGreaterThan(0);
    expect(years.length).toBe(2);
    expect(years).toContain(1950);
    expect(years).toContain(1951);
  });

  test("Get data without specifying year", async () => {
    const dataController = new DataController("test/data/draws");
    await dataController.loadFiles();

    const data = dataController.getData();
    expect(data).toBeDefined();
    expect(data.length).toBeGreaterThan(0);
    expect(data.length).toBe(3);
  });

  test("Get data with specifying year", async () => {
    const dataController = new DataController("test/data/draws");
    await dataController.loadFiles();

    const data = dataController.getData(1950);
    expect(data).toBeDefined();
    expect(data.length).toBeGreaterThan(0);
    expect(data.length).toBe(2);
  });
});
