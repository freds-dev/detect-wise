/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3gqaO6s1KJ6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function HowTo() {
    return (
      <>
        <header className="bg-gray-900 py-12 text-center text-white">
          <h1 className="text-3xl font-bold">Was ist was?</h1>
          <p className="mt-4 max-w-md mx-auto text-gray-300">
            Eine Liste an Anleitungen, mit denen ihr euer Wissen über Machine Learning erweitern könnt. 
          </p>
        </header>
        <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <a className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" href="/howto/ki.pdf">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Machine Learning</h2>
                <p className="text-gray-600">
                  Eine Schritt-für-Schritt Anleitung wie Machine-Learning funktioniert und wofür es gut ist.
                </p>
              </div>
            </a>
            <a className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" href="/howto/td.pdf">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Datensammlung</h2>
                <p className="text-gray-600">
                  Wie kann man Daten für einen Machine Learning Algorithmus sammen und aufbereiten?
                </p>
              </div>
            </a>
            <a className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" href="/howto/od.pdf">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Objekterkennung</h2>
                <p className="text-gray-600">
                  Was ist Objekterkennung und wofür ist sie gut?
                </p>
              </div>
            </a>
            <a className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" href="/howto/bias.pdf">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Verzerrungen (Bias)</h2>
                <p className="text-gray-600">
                  Wie können Verzerrungen bei maschinellen Lernmodellen erkannt und behoben werden? Wie entstehen sie?
                </p>
              </div>
            </a>
          </div>
        </main>
      </>
    )
  }