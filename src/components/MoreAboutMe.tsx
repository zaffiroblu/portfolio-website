export const MoreAboutMe = () => {
	return (
		<div id='more-about-me'>
			<h2 className='about-me-title'>More about me</h2>
			<p className='about-me-para'>
				If I had to describe myself in three words, those words would
				be...
			</p>
			<div className='more-about-me_3-words'>
				<div className='mam-container'>
					<div className='mam-header w-1'>Adaptable</div>
					<p className='about-me-para overlay'>
						I thrive on learning new things, and am no stranger to
						shifting circumstances. At work, this translates into a
						natural curiosity and a constant striving towards
						improvement. On a personal level, I adjust well to
						different personalities and communication styles, and
						celebrate each person’s individual strengths and
						talents.
					</p>
				</div>
				<div className='mam-container'>
					<div className='mam-header w-2'>Dependable</div>
					<p className='about-me-para overlay'>
						Time management and staying focused during working hours
						are strengths of mine. I ere on the side of cation when
						determining how long it will take to complete tasks so
						that I can deliver on what I promise. I also have a
						strong work ethic and sense of responsibility. When I
						say I’ll do something, people know that I’ll follow
						through.{' '}
					</p>
				</div>
				<div className='mam-container'>
					<div className='mam-header w-3'>Fun-loving</div>
					<p className='about-me-para overlay'>
						Life is short, so I enjoy it while I can! Even if I am
						given mundane tasks, I do my best to to make a game out
						of them, which helps me concentrate and stay productive.
						During long and difficult phases of a project, I find
						the humour in the little things and celebrate the
						victories with my team!
					</p>
				</div>
			</div>
		</div>
	);
};
