import QuestionnaireSelection from "@/app/questionnaires/page";

export default async function Home() {
    return (
      <main className='p-5'>
          <div>
              <QuestionnaireSelection />
          </div>
      </main>
  );
}
