import Header from "@/components/ui/header";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3gqaO6s1KJ6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function HowTo() {
  return (
    <>
      <Header />
      <header className="bg-gray-900 py-12 text-center text-white">
        <h1 className="text-3xl font-bold">What is What?</h1>
        <p className="mt-4 max-w-md mx-auto text-gray-300">
          A list of guides to help you expand your knowledge about Machine Learning.
        </p>
      </header>
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <a className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" href="/howto/ki.pdf">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Machine Learning</h2>
              <p className="text-gray-600">
                A step-by-step guide on how machine learning works and what it is good for.
              </p>
            </div>
          </a>
          <a className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" href="/howto/td.pdf">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Data Collection</h2>
              <p className="text-gray-600">
                How to collect and prepare data for a machine learning algorithm.
              </p>
            </div>
          </a>
          <a className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" href="/howto/od.pdf">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Object Detection</h2>
              <p className="text-gray-600">
                What is object detection and what is it good for?
              </p>
            </div>
          </a>
          <a className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" href="/howto/bias.pdf">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Bias</h2>
              <p className="text-gray-600">
                How to identify and fix biases in machine learning models? How do they arise?
              </p>
            </div>
          </a>
        </div>
      </main>
    </>
  )
}
