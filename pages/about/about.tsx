// import { Button } from "@mui/material";
import Head from "next/head";
import Footer from "../share/footer";
import Navbar from "../share/navbar";
import { useRouter } from "next/router";

import { GreenButton as Button } from '../../components/styled-mui';


function About() {
	const router = useRouter()
	return (
		<div>
			<Head>
				<title>About</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<main className='mb-20 mt-10'>
				<div className='flex justify-center'>
					<div className='w-3/5 text-justify'>
						<h1 className='text-3xl text-white'>About</h1>
						<p>
							This is a simple{" "}
							<a
								href='https://nextjs.org/docs'
								className='underline text-blue-600 hover:no-underline'
							>
								Next.js
							</a>{" "}
							project that uses the{" "}
							<a
								className='underline text-blue-600 hover:no-underline'
								href='https://material-ui.com/'
							>
								Material-UI
							</a>{" "}
							library.
						</p>
						<p>
							This project is a work in progress. I am working on adding more
							features and improving the codebase.
						</p>
						<br />
						<p>
							If you have any questions or comments, please feel free to contact
							us never.
						</p>
						<br />
						<p>
							{" "}
							More about the creators of this project can be found at &darr;
						</p>
						<div className='flex justify-center'>
							<div className='w-2/5 text-justify'>
								<Button
									variant='outlined'
									color='primary'
									onClick={()=>{
										router.push("/about/flatypus")
									}}
								>
									flatypus
								</Button>
								&nbsp;
								<Button variant='outlined' color='primary' onClick={()=>{router.push('/about/alex')}}>
									Alex
								</Button>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);
}

export default About;
