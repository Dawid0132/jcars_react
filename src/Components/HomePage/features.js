import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Bogata flota',
    description:
      'Nasza flota samochodów nieustannie się zwiększa, aby zapewnić naszym klientom odpowiedni pojazd.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Wynajem z NISKĄ kaucją',
    description:
      'Zaplać online kartą kredytową i wynajmij samochód z niską kaucją',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Podstawianie aut',
    description:
      'Możemy dla Twojej wygody zawrzeć umowę na odległość, a następnie podstawić Ci auto.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-gray-900 py-6 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Rozpocznij przygodę</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Wszystko co potrzebujesz jest tu
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-400">
                      Więcej informacji <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}