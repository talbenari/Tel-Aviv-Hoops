import './RulesDisplay.css'
//needs to recreate the function with map and json data

function RulesDisplay() {
    return (
        <div className="rules-display">
            <h1 className="header">Rules & Regulations</h1>
            <div className="rules">
                <div className='combo'>
                    <img className='images' src="https://indoorhoops.com/img/rules_icons/idh_rules_01-whistle.svg" alt="Whistle" />
                    <h3 className='second-header'>No refs.</h3>
                    <p className='text'>Call your own<br />fouls. "And 1"<br />doesn’t count<br />as continuation.</p>
                </div>


                <div className='combo'>
                    <img className='images' src="https://indoorhoops.com/img/rules_icons/idh_rules_02-score.svg" alt="Field" />
                    <h3 className='second-header'>Games to 7.</h3>
                    <p className='text'>Straight up. All<br />baskets count<br />as 1.</p>
                </div>


                <div className='combo'>
                    <img className='images' src="https://indoorhoops.com/img/rules_icons/idh_rules_03-trophy.svg" alt="Trophy" />
                    <h3 className='second-header'>Winner stays.</h3>
                    <p className='text'>Dynasties may be<br />subject to<br />roster realignment.</p>
                </div>


                <div className='combo'>
                    <img className='images' src="https://indoorhoops.com/img/rules_icons/idh_rules_04-fighting.svg" alt="Fist" />
                    <h3 className='second-header'>No fighting.</h3>
                    <p className='text'>Any altercation,<br />physical or<br />verbal, will result<br />in an<br />automatic ejection.</p>
                </div>


                <div className='combo'>
                    <img className='images' src="https://indoorhoops.com/img/rules_icons/idh_rules_05-bottle.svg" alt="Bottle" />
                    <h3 className='second-header'>No food.</h3>
                    <p className='text'>Water and sports<br />drinks are OK.</p>
                </div>


                <div className='combo'>
                    <img className='images' src="https://indoorhoops.com/img/rules_icons/idh_rules_06-clock.svg" alt="Clock" />
                    <h3 className='second-header'>Arrive on time.</h3>
                    <p className='text'>Showing up a few<br />minutes early to<br />stretch is fine.</p>
                </div>


                <div className='combo'>
                    <img className='images' src="https://indoorhoops.com/img/rules_icons/idh_rules_07-hoop.svg" alt="Hoop" />
                    <h3 className='second-header'>Respect the<br />facilities.</h3>
                    <p className='text'>No smoking; keep<br />to the gym; be<br />mindful of trash.</p>
                </div>

            </div>

        </div>
    )
}

export default RulesDisplay