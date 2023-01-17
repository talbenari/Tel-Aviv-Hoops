import './About.css'

function About() {
    return (
        <div className='aboutPage'>

            <div className='about-intro'>
                <h1 className='first-header'>ABOUT TLV-HOOPS</h1></div>



            <div className='about-expantion'>
                <div className='minor-header-placement'></div>


                <div className='expantion-placement'><p className='expantion'><br /><br /><br />TLV-Hoops was founded in 2023 with one objective: to bring people<br />
                    together through the game of basketball without the rigidity and pressure<br />
                    of gym memberships and league play. With the unpredictability of modern<br />
                    life we wanted to offer games when and where works best for you.
                    <br /><br />
                    Over the years we have cultivated an amazing community of basketball<br />
                    lovers who play hard every night and respect the game. Every time you<br />
                    come to an TLV-Hoops session, you are guaranteed to have a good run,<br />
                    a killer workout and to spend time with a great group of players. This is what<br />
                    we call “BALL FOR ALL” and that mentality is what drives us to offer the<br />
                    best basketball experience available today.</p></div>



                <div className='visual-aid-placement'>
                    <img className='visual=aid' src="https://i0.wp.com/thisisbasketball.world/wp-content/uploads/2020/06/BeFunky-collage-773x380.jpg" alt="indoor game" /></div>

                <div className='visual-aid-placement-mobile'> <img src="https://i0.wp.com/hoopsterreport.com/wp-content/uploads/2020/06/getty-images-1179874223.jpg?resize=256%2C256&ssl=1" alt="playing game" /></div>


                <div className='second-minor-header-placement'><h1 className='second-minor-header'><br />Giving Back</h1></div>

                <div className='second-expantion-placement'><p className='second-expantion'>Teamwork is an integral part of hoops,<br />
                    so in addition to “ball for all,” TLV-Hoops,<br />
                    a non profit organization, is also about<br />
                    assisting within the community.<br />
                    With every game you play, you<br />
                    are helping us with that mission.</p></div>


            </div>

        </div>
    )
}


export default About