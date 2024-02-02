import { DataController } from "@/lib/DataController";

describe("DataController", () => {
  afterEach(() => {
    DataController.resetInstance();
  });

  test("Signgleton - get instance", () => {
    const dataController = DataController.getInstance();
    expect(dataController).toBeDefined();
  });

  test("Signgleton - instances are always the same", () => {
    const dataController1 = DataController.getInstance();
    const dataController2 = DataController.getInstance();
    expect(dataController1).toBe(dataController2);
  });

  test("Signgleton - reset instance", () => {
    const dataController1 = DataController.getInstance();
    DataController.resetInstance();
    const dataController2 = DataController.getInstance();
    expect(dataController1).not.toBe(dataController2);
  });

  test("Load file", async () => {
    const dataController = DataController.getInstance();
    await dataController.loadFiles();
    expect(dataController).toBeDefined();
  });

  test("Get years", async () => {
    const dataController = DataController.getInstance();
    await dataController.loadFiles();

    const years = dataController.getYears();

    expect(dataController).toBeDefined();
    expect(years).toBeDefined();
    expect(years.length).toBeGreaterThan(0);
  });

  test("Get data without specifying year", async () => {
    const dataController = DataController.getInstance();
    await dataController.loadFiles();

    const data = dataController.getData();
    expect(data).toBeDefined();
    expect(data.length).toBeGreaterThan(0);
  });

  test("Get data with specifying year", async () => {
    const dataController = DataController.getInstance();
    await dataController.loadFiles();

    const data = dataController.getData(2024);
    expect(data).toBeDefined();
    expect(data.length).toBeGreaterThan(0);
  });
});
