import myImage from './images/selfie.jpg'

function App() {
	return (
		<div className='flex mt-36'>
			<div className='flex flex-row flex-wrap space-y-24 space-x-6'>
				<div>
					<div>
						<img
							className='ml-10 w-40 rounded-full'
							src={myImage}
							alt='myImage'
						/>
						<div className='-mt-8 w-60 h-40 bg-myblue rounded-lg'></div>
						<div className='text-2xl font-heboo font-extrabold ml-14 -mt-28 bg-transparent'>
							Ajdin Lojić
						</div>
						<div className='text-white bg-transparent ml-14 mb-32'>
							Web developer
						</div>
					</div>
					<div className='flex flex-col space-y-2 ml-6'>
						<div className='text-myblue font-bold mb-6'> How to reach me: </div>
						<div className='font-bold'>Cell:</div>
						<div className='text-mygrey text-sm'>+38761811375</div>
						<div className='font-bold'>Git:</div>
						<a
							href='https://github.com/ajdinl'
							className='text-mygrey text-sm hover:text-mygreen'
						>
							https://github.com/ajdinl
						</a>
						<div className='font-bold'>Linkedin:</div>
						<a
							href='https://www.linkedin.com/in/ajdin-lojic/'
							className='text-mygrey text-sm hover:text-myblue'
						>
							@ajdinlojic
						</a>
						<div className='font-bold'>Address:</div>
						<div className='text-mygrey text-sm'>Zagrebacka 55a, Sarajevo</div>
					</div>
				</div>
				<div className=''>
					<div className='bg-white p-6 w-64 h-60 mt-8 rounded-xl'>
						<div className='text-mygreen font-bold bg-transparent mb-4'>
							Personal Profile
						</div>
						<div className='text-mygrey text-md bg-transparent'>
							I am a web developer with robust problem-solving skills.
							Self-taught in React and Node js, with a desire for constant
							learning and problem- solving.
						</div>
					</div>
					<div className='bg-white p-6 w-64 h-auto mt-8 rounded-xl'>
						<div className='text-mygreen font-bold bg-transparent mb-4'>
							Skills
						</div>
						<div className='text-mygrey text-sm bg-transparent'>
							<div className='bg-transparent font-bold text-black'>
								Coding Languages:
							</div>
							<div className='bg-transparent mb-3 mt-1'>
								JavaScript, HTML/CSS
							</div>
							<div className='bg-transparent font-bold text-black'>
								More JS:
							</div>
							<div className='bg-transparent mb-3 mt-1'>
								React, React Router, Redux/Recoil, Node, Express,
								Mongoose(MongoDB)
							</div>
							<div className='bg-transparent font-bold text-black'>Other:</div>
							<div className='bg-transparent mb-3 mt-1'>
								Bootstrap, Tailwind CSS, Adobe Photoshop, Lightroom, Linux,
								Visual Studio
							</div>
						</div>
					</div>
					<div className='bg-white p-6 w-64 h-80 mt-8 rounded-xl mb-10'>
						<div className='text-mygreen font-bold bg-transparent mb-4'>
							About me
						</div>
						<div className='text-mygrey text-md bg-transparent'>
							<div className='text-mygrey text-sm bg-transparent'>
								<div className='bg-transparent font-bold text-black mb-1'>
									Personalities:
								</div>
								<div className='ml-4 bg-white'>
									<ul className='list-disc mb-4'>
										<li className='bg-white'>Accuracy</li>
										<li className='bg-white'>Creativity</li>
										<li className='bg-white'>Communication</li>
										<li className='bg-white'>Organization</li>
									</ul>
								</div>
								<div className='bg-transparent font-bold text-black mb-1'>
									Hobby:
								</div>
								<div className='ml-4 bg-white'>
									<ul className='list-disc mb-4'>
										<li className='bg-white'>CryptoCurrency</li>
										<li className='bg-white'>Motorcycling</li>
										<li className='bg-white'>Skiing</li>
										<li className='bg-white'>Photography</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=''>
					<div className='bg-white p-6 w-64 h-auto mt-8 rounded-xl'>
						<div className='text-mygreen font-bold bg-transparent mb-4'>
							Career Summary
						</div>
						<div className='text-mygrey text-md bg-transparent'>
							<div className='text-mygrey text-sm bg-transparent'>
								<div className='bg-transparent font-bold text-black mb-1'>
									Service Technician
								</div>
								<div className='mb-2'>
									<div className='bg-white text-black'>Xenon-forte d.o.o.</div>
									<div className='bg-white text-black'>Jan 2021 to present</div>
								</div>
								<div className='ml-4 bg-white'>
									<ul className='list-disc mb-4'>
										<li className='bg-white'>
											Troubleshooting hardware and software
										</li>
										<li className='bg-white'>
											Printer and computer diagnostic and service
										</li>
										<li className='bg-white'>
											Installation and configuration of print / scan equipment,
											computers and more
										</li>
									</ul>
								</div>
								<div className='bg-transparent font-bold text-black mb-1 pb-2'>
									Administrative and technical assistant
								</div>
								<div className='mb-2'>
									<div className='bg-white text-black'>Accounting d.o.o.</div>
									<div className='bg-white text-black'>
										Jan 2015 to Dec 2020
									</div>
								</div>
								<div className='ml-4 bg-white'>
									<ul className='list-disc mb-4'>
										<li className='bg-white'>
											Coordinating and performing administrative tasks
										</li>
										<li className='bg-white'>
											Provide operational support to the team
										</li>
										<li className='bg-white'>
											Creating and posting documentation, keeping a budget and
											cash register table
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='bg-white p-6 w-64 h-auto mt-8 rounded-xl'>
						<div className='text-mygreen font-bold bg-transparent mb-4'>
							Education
						</div>
						<div className='text-mygrey text-sm bg-transparent'>
							<div className='bg-transparent font-bold text-black'>
								Faculty of Political Science, University of Sarajevo
							</div>
							<div className='bg-transparent mb-1 mt-1 text-black'>
								2012 - 2014
							</div>
							<div className='bg-transparent mb-3 text-black'>
								Bachelor of Business Communication.
							</div>
							<div className='bg-transparent font-bold text-black'>
								J.U. „Željeznički school centar“ Sarajevo and J.U. „Mješovita
								srednja škola“ Gračanica
							</div>
							<div className='bg-transparent mb-1 mt-1 text-black'>
								2003 - 2007
							</div>
							<div className='bg-transparent mb-3 pb-2 text-black'>
								Electrical technician.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
