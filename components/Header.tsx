import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ParaShop</h1>
        {/* Future: Search and Cart Icons */}
        <div>
          {/* Icons will go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;