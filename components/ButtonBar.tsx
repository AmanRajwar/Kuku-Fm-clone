
import Image from 'next/image'
import { buttons } from '@/constants'
const ButtonBar = () => {
  return (
    <section className=' mt-[70px] text-white 2xl:flex items-center max-md:mx-[30px]  mx-[105px]'>
      <div className='flex 2xl:w-[40%] justify-between'>
        {buttons.map((button, index) => (
          <div key={button.label} className=' font-code font-semibold tracking-wider flex flex-col justify-center items-center cursor-pointer black-white'>
            <Image
              className=" custom-glow "
              src={button.imgURL}
              width={100}
              height={75}
              alt={button.label}
              draggable={false}
            />
            <p className=' custom-glow '>{button.label}</p>
          </div>
        ))}

      </div>
      <div className=' 2xl:w-[60%] flex   justify-center mt-[50px]  2xl:mt-0 mb-4 '>
        <p className=' font-source max-md:text-3xl font-extrabold text-5xl custom-glow text-white tracking-wider mwl'>Made with ❤️ in India.</p>
      </div>
    </section>
  )
}

export default ButtonBar