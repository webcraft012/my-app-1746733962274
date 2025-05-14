import React from 'react';

const Header = () => {
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/products?search=${searchTerm}`);
  };

  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ParaShop</h1>
        <form onSubmit={handleSearchSubmit} className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            className="px-3 py-1 rounded-md border text-gray-800"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {/* Future: Cart Icon */}
        </form>
      </div>
    </header>
  );
};

export default Header;
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