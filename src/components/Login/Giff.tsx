import React, { useEffect, useState } from 'react';

function Giff() {
  const gifURL = 'https://tenor.com/view/cat-dance-catjam-jam-gif-21130592';

  return (
    <div>
      <img src={ gifURL } alt="Cat Jam" />
    </div>
  );
}

export default Giff;
