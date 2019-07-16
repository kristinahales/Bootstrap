import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='container1'>
                    <span className='text1'>Services</span>
                    <span className='text2'>Lorem ipsum dolor sit amet consectetur.</span>
                </div>

                <div className='container2'>
                    <div className='container3'>
                        <i class="fas fa-shopping-cart"></i>
                        <h4> E-Commerce</h4>
                        <p className='text3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>

                    <div className='container3'>
                        <i class="fas fa-tv"></i>
                        <h4>Responsive Design</h4>
                        <p className='text3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>

                    
                    <div className='container3'>
                        <i class="fas fa-lock"></i>
                        <h4>Web Security</h4>
                        <p className='text3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>

                </div>
            </div>
        )
    }

}

export default Home;