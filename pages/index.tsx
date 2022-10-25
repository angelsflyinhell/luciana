import type { NextPage } from 'next'
import Button from '../components/Button'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
    return (
        <>
            <div className='bg-black text-white h-screen'>
                <Navbar />
                <div className='flex justify-center align-center text-start h-full w-full'>
                    <div className="px-8 m-auto">
                        <div className='invisible md:visible'>
                            <div id='title-span'>
                                <span>
                                    <h2 id='words' className="font-extrabold text-6xl hover:text-black transition ease-in-out duration-150">Hello there 👋</h2>
                                </span>
                                <span>
                                    <h2 id='words' className="font-extrabold text-6xl hover:text-black transition ease-in-out duration-150">Full Stack</h2>
                                </span>
                                <span>
                                    <h2 id='words' className="font-extrabold text-6xl hover:text-black transition ease-in-out duration-150">Artist</h2>
                                </span>
                                <span>
                                    <h2 id='words' className="font-extrabold text-6xl hover:text-black transition ease-in-out duration-150">Founder of XP</h2>
                                </span>
                            </div>
                        </div>
                        <div className='md:hidden'>
                            <h2 className="font-extrabold text-6xl hover:text-black transition ease-in-out duration-150">Hey, I'm luna 👋</h2>
                        </div>
                        <div>
                            <p className='text-xl max-w-md py-4 hover:text-black transition ease-in-out duration-150'>
                                8 years experience, full stack. Interested in web development, machine learning and always excited to learn.
                            </p>
                            <div className='flex gap-8'>
                                <Button>Projects</Button>
                                <Button>About me</Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
