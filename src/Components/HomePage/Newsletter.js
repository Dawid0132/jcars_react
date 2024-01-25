export default function Newsletter() {
    return (
      <div className="bg-gray-900 py-5">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
            <h2 className="inline sm:block lg:inline xl:block">Czekasz na nowe samochody?</h2>{' '}
            <p className="inline sm:block lg:inline xl:block">Zapisz się do naszego newsletter'a.</p>
          </div>
          <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Wprowadź adres e-mail"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Zapisz się
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
            Dbamy o Twoje dane. Przeczytaj naszą{' '}
              <a href="#" className="font-semibold text-white">
                Politykę prywatności
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    )
  }