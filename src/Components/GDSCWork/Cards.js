import React from 'react'

const Cards = () => {
    return (
        <div className='mainCards'>
            <div className='cardsContainer'>
                {/* Cards 1  */}
                <div className='cards'>
                    <div className="leftSection">
                        <div className='safeDiv'>
                            <p className="titlePara">Safeguard</p>
                            <p className="number">1</p>
                        </div>
                        <p className='para'>P12 token: a POS DAO designed </p>
                        <p className='para'> to safeguard meritocracy in</p>
                        <p className='para'>GameFi</p>
                    </div>
                    <div>
                        <img src={require("../../assets/safeguard.png")} alt='image1' />
                    </div>
                </div>
                {/* cards 1 end  */}
                {/* Cards 2  */}
                <div className='cards revCards'>
                    <div>
                        <img src={require("../../assets/2nd.png")} alt='image1' />
                    </div>
                    <div className="leftSection">
                        <div className='safeDiv'>
                            <p className="titlePara">Safeguard</p>
                            <p className="number">2</p>
                        </div>
                        <p className='para'>P12 token: a POS DAO designed </p>
                        <p className='para'> to safeguard meritocracy in</p>
                        <p className='para'>GameFi</p>
                    </div>
                </div>
                {/* cards 2 end  */}
                {/* Cards 3  */}
                <div className='cards'>
                    <div className="leftSection">
                        <div className='safeDiv'>
                            <p className="titlePara">Safeguard</p>
                            <p className="number">3</p>
                        </div>
                        <p className='para'>P12 token: a POS DAO designed </p>
                        <p className='para'> to safeguard meritocracy in</p>
                        <p className='para'>GameFi</p>
                    </div>
                    <div>
                        <img src={require("../../assets/3rd.png")} alt='image1' />
                    </div>
                </div>
                {/* cards 3 end  */}
                {/* Cards 4  */}
                <div className='cards revCards'>
                    <div>
                        <img src={require("../../assets/safeguard.png")} alt='image1' />
                    </div>
                    <div className="leftSection">
                        <div className='safeDiv'>
                            <p className="titlePara">Safeguard</p>
                            <p className="number">4</p>
                        </div>
                        <p className='para'>P12 token: a POS DAO designed </p>
                        <p className='para'> to safeguard meritocracy in</p>
                        <p className='para'>GameFi</p>
                    </div>
                </div>
                {/* cards 4 end  */}
            </div>
        </div>
    )
}

export default Cards
