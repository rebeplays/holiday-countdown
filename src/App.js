import React, { useState, useEffect } from 'react';
import './App.css';
const HolidayCountdown = () => {
  // List of major holidays with their dates for 2025
  const holidays = [
    { name: "Valentine's Day", date: new Date(2025, 1, 14), color: "valentine" },
    { name: "St. Patrick's Day", date: new Date(2025, 2, 17), color: "patrick" },
    { name: "Easter", date: new Date(2025, 3, 20), color: "easter" },
    { name: "Mother's Day", date: new Date(2025, 4, 11), color: "mothers" },
    { name: "Father's Day", date: new Date(2025, 5, 15), color: "fathers" },
    { name: "Independence Day", date: new Date(2025, 6, 4), color: "independence" },
    { name: "Halloween", date: new Date(2025, 9, 31), color: "halloween" },
    { name: "Thanksgiving", date: new Date(2025, 10, 27), color: "thanksgiving" },
    { name: "Christmas", date: new Date(2025, 11, 25), color: "christmas" },
    { name: "New Year's Eve", date: new Date(2025, 11, 31), color: "newyears" }
  ];

  // Gift recommendations for each holiday
  const giftRecommendations = {
    "Valentine's Day": [
      { 
        name: "Aromatic Diffuser", 
        url: "https://shopamericaio.com/flame-effect-essential-oil-diffuser-with-led-light/", 
        image: "https://img1.sellvia.com/uploads/2024/11/18/908d9544fb7f260039dbd8683d5e2a6c.jpg-full.webp?1000",
        price: 54.49
      },
      { 
        name: "LED Moon Lamp", 
        url: "https://shopamericaio.com/led-moon-lamp-with-rgb-light/", 
        image: "https://img1.sellvia.com/uploads/2024/11/01/90fba8a96d07db4e37aa4f84e78a6e4b.jpeg-full.webp?1000",
        price: 66.65
      },
      { 
        name: "Women's Card Holder Wallet", 
        url: "https://shopamericaio.com/stylish-womens-card-holder-wallet/", 
        image: "https://img1.sellvia.com/uploads/2024/11/12/6cf748ac21e359c5e7393f7e9995c77a.jpeg-full.webp?1000",
        price: 54.95
      }
    ],
    "St. Patrick's Day": [
      { 
        name: "Retro Stoneware Round Tray", 
        url: "https://shopamericaio.com/retro-stoneware-round-tray-single-layer-tea-set/", 
        image: "https://img11.sellvia.com/uploads/2023/11/17/da8320b9eab3c023474940f11347c5c7.jpg?1000",
        price: 2299.49
      },
      { 
        name: "Fila White Sneakers with Green Accents", 
        url: "https://shopamericaio.com/fila-white-sneakers-with-green-accents/", 
        image: "https://img.sellvia.com/uploads/2025/01/13/6a8e8ba257280701c0f2372de02261b6.webp-full.webp?1000",
        price: 103.01
      },
      { 
        name: "Crystal Jelly Wax Scented Candle", 
        url: "https://example.com/champagne-glasses", 
        image: "https://img.sellvia.com/uploads/2025/01/17/7e4fe31cbf1059b4bfd10aa0d838c430.jpg-full.webp?1000",
        price: 46.95
      }
    ],
  
    "Easter": [
      { 
        name: "Rabbit Plush Toy", 
        url: "https://shopamericaio.com/charming-strawberry-carrot-rabbit-plush-toy-transformable-fruit-to-bunny-stuffed-doll/", 
        image: "https://img11.sellvia.com/uploads/2023/11/22/ba61d5a70b5557f1ff6589a7fd0803b7.jpeg?1000",
        price: 21.95
      },
      { 
        name: "Cute Bunny Adjustable Phone Holder", 
        url: "https://shopamericaio.com/cute-bunny-adjustable-phone-and-tablet-holder-with-multifunctional-base/", 
        image: "https://img1.sellvia.com/uploads/2024/11/19/ca8e5c28124f18530c9ce7c9e4033e94.jpeg-full.webp?1000",
        price: 34.50
      },
      { 
        name: "Bunny Night Lights for Kids", 
        url: "https://shopamericaio.com/bunny-night-lights-for-kids/", 
        image: "https://img1.sellvia.com/uploads/2024/07/25/c8ac5ed6f261b605fbe77e4002fb9cac.webp?1000",
        price: 30.95
      }
    ],
    "Mother's Day": [
      { 
        name: "Leather Woven Crossbody Bag", 
        url: "https://shopamericaio.com/handcrafted-genuine-leather-woven-crossbody-messenger-bag-for-women/", 
        image: "https://img1.sellvia.com/uploads/2024/10/23/50e1d02bf064ba9d5a9358f86433ea66.jpeg-full.webp?1000",
        price: 144.95
      },
      { 
        name: "Wireless Foot Massager", 
        url: "https://shopamericaio.com/wireless-foot-massager-with-graphene-infrared-heat-therapy-and-air-compression/", 
        image: "https://img11.sellvia.com/uploads/2023/11/16/d16cc78490784123264f2ffb5ecf8910.jpg?1000",
        price: 34.50
      },
      { 
        name: "Uterus Warming Belt", 
        url: "https://shopamericaio.com/adjustable-uterus-warming-belt-with-heat-and-vibration-therapy/", 
        image: "https://img1.sellvia.com/uploads/2024/10/23/c8bad0ac3544fbde58b08e9fdd318d88.jpg-full.webp?1000",
        price: 36.80
      }
    ],
    "Father's Day": [
      { 
        name: "Men’s Luxury Quartz Watch", 
        url: "https://shopamericaio.com/mens-luxury-quartz-watch-2/", 
        image: "https://img1.sellvia.com/uploads/2024/10/23/05b4fa9e672c9908b16432f2590fbb09.jpg-full.webp?1000",
        price: 46.49
      },
      { 
        name: "Electric Shaver for Men", 
        url: "https://shopamericaio.com/electric-shaver-for-men/", 
        image: "https://img1.sellvia.com/uploads/2024/11/19/c10a02d89141a1247884a50c05095c22.jpg-full.webp?1000",
        price: 164.49
      },
      { 
        name: "Comprehensive Home Repair Tool Kit", 
        url: "https://shopamericaio.com/comprehensive-home-repair-tool-kit-with-portable-storage-case/", 
        image: "https://img1.sellvia.com/uploads/2024/11/18/59db17e8bd53019d3680bb917b40a995.jpg-full.webp?1000",
        price: 134.49
      }
    ],
    "Independence Day": [
      { 
        name: "Bluetooth Speaker", 
        url: "https://shopamericaio.com/portable-bluetooth-speaker-with-20w-hi-res-audio-ipx5-waterproof-rgb-lights/", 
        image: "https://img1.sellvia.com/uploads/2024/11/14/24cf69ea55af68e4dfb3db6bb593ba58.jpg-full.webp?1000",
        price: 21.95
      },
      { 
        name: "Portable Electric BBQ Grill", 
        url: "https://shopamericaio.com/cute-bunny-adjustable-phone-and-tablet-holder-with-multifunctional-base/", 
        image: "https://img11.sellvia.com/uploads/2023/11/17/8687c319fc398c3e5568d8cef6a5d342.jpeg?1000",
        price: 1549.99
      },
      { 
        name: "U.S. Polo Assn. Men’s Plain Blue Polo Shirt", 
        url: "https://shopamericaio.com/u-s-polo-assn-mens-plain-blue-polo-shirt/", 
        image: "https://img.sellvia.com/uploads/2025/01/13/95a6f3e389780b0acd5b63185c79ce91.webp-full.webp?1000",
        price: 92.99
      }
    ],
    "Halloween": [
      { 
        name: "Creative Halloween Black Cat Plush Toy", 
        url: "https://shopamericaio.com/creative-halloween-black-cat-plush-toy/", 
        image: "https://img1.sellvia.com/uploads/2024/10/22/3d08ff9af3e5e16ee7a9b05bd0df5d85.jpg-full.webp?1000",
        price: 41.49
      },
      { 
        name: "LED Halloween Mask ", 
        url: "https://shopamericaio.com/bluetooth-led-halloween-mask-rgb-light-up-display-with-diy-customization-gesture-control/", 
        image: "https://img11.sellvia.com/uploads/2023/11/17/bee9c7076680021dbce19a2990e83165.webp?1000",
        price: 91.49
      },
      { 
        name: "Funny Pumpkin Plush Pillow", 
        url: "https://shopamericaio.com/bunny-night-lights-for-kids/", 
        image: "https://img11.sellvia.com/uploads/2023/11/24/46ec761b6d5e39d78671a7783eaa0fb8.jpg?1000",
        price: 20.95
      }
    ],
    "Christmas": [
      { 
        name: "Christmas Tree Aromatherapy Diffuser", 
        url: "https://shopamericaio.com/christmas-tree-aromatherapy-diffuser/", 
        image: "https://img1.sellvia.com/uploads/2024/11/11/3d01bb441e99d0303928ed2102eb0860.jpg-full.webp?1000",
        price: 65.49
      },
      { 
        name: "Cute Puppy Bow Knot Dress Set", 
        url: "https://shopamericaio.com/cute-puppy-bow-knot-dress-set-warm-winter-dog-clothes-for-christmas/", 
        image: "https://img.sellvia.com/uploads/2025/01/15/9a8277eb490f636255faa48d477d0a25.jpg-full.webp?1000",
        price: 29.49
      },
      { 
        name: "Christmas Protective Case for Nintendo Switch and Joy-Con", 
        url: "https://shopamericaio.com/christmas-theme-cute-plush-protective-case-for-nintendo-switch-and-joy-con/", 
        image: "https://img1.sellvia.com/uploads/2024/02/03/cc5dc752e55d345e3bd918c9aefbc9ea.jpg?1000",
        price: 30.95
      }
    ],
    "Thanksgiving": [
      { 
        name: "Handmade Rattan Wicker Storage Basket", 
        url: "https://shopamericaio.com/charming-strawberry-carrot-rabbit-plush-toy-transformable-fruit-to-bunny-stuffed-doll/", 
        image: "https://img1.sellvia.com/uploads/2024/11/19/98c4d2a7d47890e6a00a560a956857c1.jpg-full.webp?1000",
        price: 31.49

      },
      { 
        name: "Smart Touch Screen Air Fryerr", 
        url: "https://shopamericaio.com/cute-bunny-adjustable-phone-and-tablet-holder-with-multifunctional-base/https://shopamericaio.com/1700w-smart-touch-screen-air-fryer-large-capacity-multifunction-cooking-pot/", 
        image: "https://img11.sellvia.com/uploads/2023/11/17/b19822502cd5ccfec0e1dac739dbef78.jpg?1000",
        price: 34.50
      },
      { 
        name: "Dual Cooking Area Charcoal Grill", 
        url: "https://shopamericaio.com/portable-dual-cooking-area-charcoal-grill-smoke-free-easy-carry-bbq-for-outdoor-adventures/", 
        image: "https://img11.sellvia.com/uploads/2023/11/28/48728dc8b5ee3947292676cf189bd6f3.jpeg?1000",
        price: 217.65
      }
    ],
    "New Year's Eve": [
      { 
        name: "Portable Party Speaker", 
        url: "https://shopamericaio.com/portable-bluetooth-party-speaker-with-led-lights-waterproof-20w-power/", 
        image: "https://img1.sellvia.com/uploads/2024/11/14/44eabd9beee71cc3d75b3d973d7a98de.jpg-full.webp?1000",
        price: 128.95
      },
      { 
        name: "LED Mirror Ball String Lights", 
        url: "https://shopamericaio.com/1-5m-led-mirror-ball-string-lights-for-retro-disco-party-and-event-decor/", 
        image: "https://img.sellvia.com/uploads/2025/01/17/7afc299e320b1c355371eba180889354.webp-full.webp?1000",
        price: 19.80
      },
      { 
        name: "Stainless Steel Punk Ring Bottle Opener ", 
        url: "https://shopamericaio.com/stainless-steel-punk-ring-bottle-opener-party-essential-fashionable-beer-accessory/", 
        image: "https://img1.sellvia.com/uploads/2024/02/09/h2562c19d70ec4f358c3063d2178e67c93.webp?1000",
        price: 9.15
      }
    ]

    
  };

  // State for selected holiday
  const [selectedHoliday, setSelectedHoliday] = useState(holidays[0]);
  
  // State for countdown
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate time remaining
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const selectedDate = new Date(selectedHoliday.date);
      
      // If the holiday has passed for this year, set it to next year
      if (now > selectedDate) {
        selectedDate.setFullYear(selectedDate.getFullYear() + 1);
      }
      
      const timeRemaining = selectedDate - now;
      
      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [selectedHoliday]);

  // Handle holiday selection change
  const handleHolidayChange = (e) => {
    const selected = holidays.find(holiday => holiday.name === e.target.value);
    setSelectedHoliday(selected);
  };

  return (
    <div className="holiday-countdown-container">
      <h1 className="main-title">Holiday Countdown Timer</h1>
      
      {/* Holiday selector */}
      <div className="holiday-selector">
        <label htmlFor="holiday-select">Select a Holiday:</label>
        <select
          id="holiday-select"
          value={selectedHoliday.name}
          onChange={handleHolidayChange}
        >
          {holidays.map((holiday) => (
            <option key={holiday.name} value={holiday.name}>
              {holiday.name} - {holiday.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </option>
          ))}
        </select>
      </div>
      
      {/* Countdown display */}
      <div className={`countdown-display ${selectedHoliday.color}`}>
        <h2 className="holiday-name">{selectedHoliday.name} Countdown</h2>
        <div className="countdown-grid">
          <div className="countdown-unit">
            <div className="countdown-value">{countdown.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-unit">
            <div className="countdown-value">{countdown.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-unit">
            <div className="countdown-value">{countdown.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-unit">
            <div className="countdown-value">{countdown.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
      
      {/* Gift recommendations */}
      <div className="gift-recommendations">
        <h2 className="recommendations-title">Gift Recommendations for {selectedHoliday.name}</h2>
        <div className="recommendations-grid">
          {giftRecommendations[selectedHoliday.name].map((gift, index) => (
            <div key={index} className="gift-item">
              <img 
                src={gift.image} 
                alt={gift.name} 
                className="gift-item-image"
              />
              <h3 className="gift-name">{gift.name}</h3>
              <p className="gift-price">${gift.price.toFixed(2)}</p>
              <a 
                href={gift.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="shop-now-button"
              >
                Shop Now
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <div className="footer">
        <p>All dates are for 2025. Gift recommendations for inspiration.</p>
      </div>
    </div>
  );
};

export default HolidayCountdown;

// const HolidayCountdown = () => {
//   // List of major holidays with their dates for 2025
//   const holidays = [
//     { name: "Valentine's Day", date: new Date(2025, 1, 14), color: "valentine" },
//     { name: "St. Patrick's Day", date: new Date(2025, 2, 17), color: "patrick" },
//     { name: "Easter", date: new Date(2025, 3, 20), color: "easter" },
//     { name: "Mother's Day", date: new Date(2025, 4, 11), color: "mothers" },
//     { name: "Father's Day", date: new Date(2025, 5, 15), color: "fathers" },
//     { name: "Independence Day", date: new Date(2025, 6, 4), color: "independence" },
//     { name: "Halloween", date: new Date(2025, 9, 31), color: "halloween" },
//     { name: "Thanksgiving", date: new Date(2025, 10, 27), color: "thanksgiving" },
//     { name: "Christmas", date: new Date(2025, 11, 25), color: "christmas" },
//     { name: "New Year's Eve", date: new Date(2025, 11, 31), color: "newyears" }
//   ];

//   // Gift recommendations for each holiday
//   const giftRecommendations = {
//     "Valentine's Day": [
//       { name: "Aromatic Diffuser", url: "https://example.com/diffuser" },
//       { name: "LED Moon Lamp", url: "https://example.com/moon-lamp" },
//       { name: "Luxury Bath Bombs Set", url: "https://example.com/bath-bombs" }
//     ],
//     "St. Patrick's Day": [
//       { name: "Irish Coffee Mugs", url: "https://example.com/coffee-mugs" },
//       { name: "Green Apparel", url: "https://example.com/green-apparel" },
//       { name: "Whiskey Stones Set", url: "https://example.com/whiskey-stones" }
//     ],
//     // ... (rest of the gift recommendations remain the same)
//     "New Year's Eve": [
//       { name: "Champagne Glasses", url: "https://example.com/champagne-glasses" },
//       { name: "Party Supplies", url: "https://example.com/party-supplies" },
//       { name: "Fitness Tracker", url: "https://example.com/fitness-tracker" }
//     ]
//   };

//   // State for selected holiday
//   const [selectedHoliday, setSelectedHoliday] = useState(holidays[0]);
  
//   // State for countdown
//   const [countdown, setCountdown] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // Calculate time remaining
//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       const selectedDate = new Date(selectedHoliday.date);
      
//       // If the holiday has passed for this year, set it to next year
//       if (now > selectedDate) {
//         selectedDate.setFullYear(selectedDate.getFullYear() + 1);
//       }
      
//       const timeRemaining = selectedDate - now;
      
//       if (timeRemaining > 0) {
//         const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
//         setCountdown({ days, hours, minutes, seconds });
//       } else {
//         setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     }, 1000);
    
//     return () => clearInterval(timer);
//   }, [selectedHoliday]);

//   // Handle holiday selection change
//   const handleHolidayChange = (e) => {
//     const selected = holidays.find(holiday => holiday.name === e.target.value);
//     setSelectedHoliday(selected);
//   };

//   return (
//     <div className="holiday-countdown-container">
//       <h1 className="main-title">Holiday Countdown Timer</h1>
      
//       {/* Holiday selector */}
//       <div className="holiday-selector">
//         <label htmlFor="holiday-select">Select a Holiday:</label>
//         <select
//           id="holiday-select"
//           value={selectedHoliday.name}
//           onChange={handleHolidayChange}
//         >
//           {holidays.map((holiday) => (
//             <option key={holiday.name} value={holiday.name}>
//               {holiday.name} - {holiday.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
//             </option>
//           ))}
//         </select>
//       </div>
      
//       {/* Countdown display */}
//       <div className={`countdown-display ${selectedHoliday.color}`}>
//         <h2 className="holiday-name">{selectedHoliday.name} Countdown</h2>
//         <div className="countdown-grid">
//           <div className="countdown-unit">
//             <div className="countdown-value">{countdown.days}</div>
//             <div className="countdown-label">Days</div>
//           </div>
//           <div className="countdown-unit">
//             <div className="countdown-value">{countdown.hours}</div>
//             <div className="countdown-label">Hours</div>
//           </div>
//           <div className="countdown-unit">
//             <div className="countdown-value">{countdown.minutes}</div>
//             <div className="countdown-label">Minutes</div>
//           </div>
//           <div className="countdown-unit">
//             <div className="countdown-value">{countdown.seconds}</div>
//             <div className="countdown-label">Seconds</div>
//           </div>
//         </div>
//       </div>
      
//       {/* Gift recommendations */}
//       <div className="gift-recommendations">
//         <h2 className="recommendations-title">Gift Recommendations for {selectedHoliday.name}</h2>
//         <div className="recommendations-grid">
//           {giftRecommendations[selectedHoliday.name].map((gift, index) => (
//             <div key={index} className="gift-item">
//               <h3 className="gift-name">{gift.name}</h3>
//               <a 
//                 href={gift.url} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="shop-now-button"
//               >
//                 Shop Now
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <div className="footer">
//         <p>All dates are for 2025. Gift recommendations from Example Store.</p>
//       </div>
//     </div>
//   );
// };

// export default HolidayCountdown;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
