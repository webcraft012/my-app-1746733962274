import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ParaShop</h1>
        {/* Future: Search and Cart Icons */}
        <h1 className="text-2xl font-bold">ParaShop</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            className="px-3 py-1 rounded-md border"
          />
          {/* Future: Cart Icon */}
        </div>
      </div>
          {/* Icons will go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;