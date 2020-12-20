import React from 'react';

export const BuyFonts = () => {
  return (
    <div className="main-layout">
      <div className="font-selection">
        <div className="font-selection__title">Please select one font</div>

        {/* <div className="font-selection__fonts">
      {data &&
        data.map((item) => (
          <div
            className={`font-selection__fonts-item ${
              saveId === item.id ? 'active' : ''
            }`}
            key={item.id}
            onClick={() => onToggle(item.id)}
          >
            <Link to={item.content_endpoint}>{item.label}</Link>
          </div>
        ))}
    </div> */}
      </div>

      <div
        className="fonts-content"
        // style={{ justifyContent: loading ? 'center' : 'space-around' }}
      >
        {/* {loading && <div className="loading">loading...</div>} */}
      </div>
    </div>
  );
};
