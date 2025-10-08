import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ThemeTwo = ({ attributes, setAttributes }) => {

    const { cardData = [] } = attributes;

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='themeTwo cardThemeWrapper'>
            <Carousel responsive={responsive} className='carousel-card-section'
                showDots={true}
                infinite={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    cardData.length > 0 && cardData.map((card, idx) => {
                        return (
                            <div key={idx} className="card-row" onClick={() => setAttributes({ activeIndex: idx })}>
                                <div className="card card-2">
                                    <img src={card.image} alt={card.title} className="card-image" />
                                    <div className="card-content content">
                                        <h2 className='title'>{card.title}</h2>
                                        <p className='description'>{card.description}</p>
                                        {card.button && <button className='btn'>{card.button.text}</button>}
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