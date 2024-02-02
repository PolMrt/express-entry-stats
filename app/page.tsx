import { YearDetails } from "@/components/YearDetails";
import { DataController } from "@/lib/DataController";

export default async function Home() {
  const dc = DataController.getInstance();
  await dc.loadFiles();

  return (
    <main className="mx-auto max-w-2xl">
      <div className="prose">
        <h1>Express Entry statisctics</h1>
        <p>
          Express Entry is a Canadian immigration program designed to facilitate
          the process for skilled workers who wish to become permanent residents
          of Canada. Launched in 2015, it uses a comprehensive ranking system to
          evaluate candidates based on factors like age, education, language
          proficiency, and work experience. This system enables Canadian
          authorities to select individuals who are most likely to succeed
          economically in Canada.
        </p>

        <p>
          Express Entry manages applications for three key economic immigration
          programs: the Federal Skilled Worker Program, the Federal Skilled
          Trades Program, and the Canadian Experience Class. Candidates submit
          an online profile, which is then entered into a pool. Those with the
          highest scores are invited to apply for permanent residency through
          regular draws from the pool. This efficient and streamlined process
          reflects Canada&apos;s commitment to welcoming skilled talent from
          around the world and addressing labor market needs.
        </p>

        <h2>Last Draws Data</h2>
        <p>
          Explore the latest statistics from Canada&apos;s Express Entry draws.
          Our comprehensive dataset offers a detailed view of the program&apos;s
          recent activities, showcasing the number of invitations issued in each
          draw. These insights provide valuable information for understanding
          trends and changes in Canadian immigration policy. Below, you&apos;ll
          find a neatly organized list of the most recent draws, grouped by
          year, focusing solely on the number of invitations sent out. This data
          is crucial for anyone interested in the dynamics of the Express Entry
          program and its impact on potential candidates.
        </p>
      </div>
      <div className="mt-6 space-y-4">
        {dc.getYears().map((year) => (
          <YearDetails key={year} year={year} />
        ))}
      </div>

      <p className="mt-24 text-xs text-gray-500">
        Please note that the information provided on this website is for general
        informational purposes only and is not intended to be legally binding.
        This website is independently operated and is not affiliated with
        Immigration, Refugees and Citizenship Canada (IRCC) or any government
        agency. The data presented here, including the statistics related to the
        Express Entry draws, is provided without any guarantees of accuracy or
        currentness. We make every effort to ensure the reliability of the
        information, but we do not warrant its completeness, timeliness, or
        accuracy. Users should not rely solely on the information found on this
        website for making immigration or legal decisions. We advise consulting
        with a qualified immigration lawyer or the official IRCC website for the
        most current and personalized advice.
      </p>
    </main>
  );
}
