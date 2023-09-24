import React from 'react'

const PostBox = () => {
  return (
    <div className="postcode-container">
      <div className="postcodes">
        <div className="codes-text-2">
          <p>Benefits</p>
          <h1>Easily find a postcode.</h1>
          <h3>
            Use Check My Postcode to find out all the key information for your
            local postcodes.
          </h3>
        </div>
        <div className="grid-container">
          <div className="postcodes-grid">
            <div className="organize">
              <div className="text">
                <h2>Organize your day</h2>
                <h3>
                  Find out typical house prices, council tax bands and business
                  rateable values.
                </h3>
              </div>
            </div>
            <div className="organize">
              <div className="text">
                <h2>Representation</h2>
                <h3>
                  See who represents you in parliament and your local councils,
                  and discover how Ofsted has rated local schools.
                </h3>
              </div>
            </div>
            <div className="organize">
              <div className="text">
                <h2>Superfast Broadband</h2>
                <h3>
                  Check whether superfast broadband is available, and see how
                  popular it is.
                </h3>
              </div>
            </div>
            <div className="organize">
              <div className="text">
                <h2>Map Location</h2>
                <h3>See where your postcode is on a map.</h3>
              </div>
            </div>
            <div className="organize">
              <div className="text">
                <h2>Nearest Postcode</h2>
                <h3>Find the nearest postcode to where you are right now.</h3>
              </div>
            </div>
            <div className="organize">
              <div className="text">
                <h2>Comments</h2>
                <h3>
                  Read what other people have said about your postcode, and
                  leave your own comments for others to read.
                </h3>
              </div>
            </div>
          </div>
        </div>
          <div className="onew">
            <div className="experiment"></div>
          </div>
      </div>
    </div>
  );
}

export default PostBox