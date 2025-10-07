import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ThemeTwo = ({ attributes, setAttributes }) => {

    const { cardData = [] } = attributes;

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='themeTwo cardThemeWrapper'>
            <Carousel responsive={responsive} className='carousel-card-section'>
                {
                    cardData.length > 0 && cardData.map((card, idx) => {
                        return (
                            <div key={idx} className="card-row">
                                <div className="card-2">
                                    <img src={card.image} alt={card.title} className="card-image" />
                                    <div className="content">
                                        <h2>{card.title}</h2>
                                        <p>{card.description}</p>
                                        {card.button && <button>{card.button.text}</button>}
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default ThemeTwo;