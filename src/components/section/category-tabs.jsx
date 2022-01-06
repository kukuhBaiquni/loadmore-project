import PropTypes from 'prop-types'
import { Button } from 'components/common'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function CategoryTabs({
  categories,
  setActiveIndex,
  activeIndex,
}) {
  const { push } = useRouter()

  const changeCategory = (index) => {
    setActiveIndex(index)
    push(`/${categories[index].type}?category=${index}`)
  }

  return (
    <nav className='w-full sm:max-w-screen-xl mx-auto my-3'>
      <span className='flex text-primary items-center'>
        <Link href='/'>
          <a>
            <Button
              className='p-1 bg-primary bg-opacity-40 rounded hover:bg-opacity-30 transition-all'
              icon={<ChevronLeftIcon className='h-5 w-5 text-primary' />}
            />
          </a>
        </Link>
        <h1 className='text-4xl text-primary ml-3'>
          {categories[activeIndex].title}
        </h1>
      </span>
      <ul className='flex gap-2 sm:gap-3 my-2 text-xs sm:text-base flex-wrap'>
        {categories.map((category, index) => (
          <li key={category.title}>
            <Button
              className={clsx(
                activeIndex === index
                  ? 'bg-primary text-primary bg-opacity-20 border-primary opacity-100'
                  : 'hover:bg-opacity-10 bg-opacity-0 border-white text-white opacity-50',
                'rounded border bg-white py-0.5 px-2 text-sm transition-all',
              )}
              title={category.title}
              onClick={() => changeCategory(index)}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

CategoryTabs.propTypes = {
  categories: PropTypes.array,
  setActiveIndex: PropTypes.func,
  activeIndex: PropTypes.number,
}