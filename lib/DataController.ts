import fs from "fs/promises";
import dayjs, { Dayjs } from "dayjs";

type FileDataPoint = {
  id: number;
  date: string;
  nb_invitations: number;
  min_crs: number;
  tie_breaking_rule: string;
  category: string;
};

export type DataPoint = {
  id: number;
  date: Dayjs;
  nbInvitations: number;
  minCrs: number;
  tieBreakingRule: Dayjs;
  category: string;
};

// Singleton class to load and store data
export class DataController {
  private static instance: DataController;

  private dataPath: string = "data/draws";
  private data: DataPoint[] = [];
  private years: number[] = [];

  // Load data from files in data
  private constructor() {}

  public static getInstance(): DataController {
    if (!DataController.instance) {
      DataController.instance = new DataController();
    }
    return DataController.instance;
  }

  public static resetInstance() {
    DataController.instance = new DataController();
  }

  public async loadFiles() {
    const data = await fs.readdir(this.dataPath);
    for (const file of data) {
      // Add year to tracked years
      const year = parseInt(file.split(".")[0]);
      this.years.push(year);

      // Add file content and map it to DataPoint (file is json)
      const fileData = await fs.readFile(`${this.dataPath}/${file}`, "utf8");
      const fileJson = JSON.parse(fileData);

      if (fileJson.length <= 0) continue;
      fileJson.forEach((singleDraw: FileDataPoint) => {
        this.data.push({
          id: singleDraw.id,
          date: dayjs(singleDraw.date),
          nbInvitations: singleDraw.nb_invitations,
          minCrs: singleDraw.min_crs,
          tieBreakingRule: dayjs(singleDraw.tie_breaking_rule),
          category: singleDraw.category,
        });
      });
    }

    // Sort the year array
    this.years.sort((a, b) => b - a);
  }

  public getYears(): number[] {
    return this.years;
  }

  public getData(year?: number): DataPoint[] {
    if (year) {
      return this.data.filter((draw) => draw.date.year() === year);
    }
    return this.data;
  }
}
