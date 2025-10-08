import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const ThemeOne = ({ attributes, setAttributes }) => {

    const { cardData = [], column } = attributes;
    console.log('themeOne', column?.desktop)

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: column?.desktop
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: column?.tablet
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: column?.mobile
        }
    };

    return (
        <div className="themeOne cardThemeWrapper">
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
                                <div className="card">
                                    <img className="card-image" src={card.image} alt={card.title} />
                                    <div className="card-content">
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

export default ThemeOne;