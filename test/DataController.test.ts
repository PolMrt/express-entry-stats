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

  test("Singleton load the same year only once", async () => {
    const dataController = DataController.getInstance();
    await dataController.loadFiles();
    await dataController.loadFiles();

    const years = dataController.getYears();
    const year = years[0];
    const otherSameYears = years.filter((y) => y === year);

    expect(otherSameYears.length).toBe(1);
  });

  test("Singleton load the same file only once", async () => {
    const dataController = DataController.getInstance();
    await dataController.loadFiles();
    await dataController.loadFiles();

    const data = dataController.getData();
    const oneDp = data[0];
    const otherDpsWithSameId = data.filter((dp) => dp.id === oneDp.id);

    expect(otherDpsWithSameId.length).toBe(1);
  });

  test("Should return some categories", async () => {
    const dataController = DataController.getInstance();
    await dataController.loadFiles();

    const categories = dataController.getCategories();
    expect(categories).toBeDefined();
    expect(categories.length).toBeGreaterThan(0);
  });

  test("Should return some categories for a specific year", async () => {
    const dataController = DataController.getInstance();
    await dataController.loadFiles();

    const categories = dataController.getCategories(2024);
    expect(categories).toBeDefined();
    expect(categories.length).toBeGreaterThan(0);
  });
});
