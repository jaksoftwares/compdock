const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <button className={`py-3 px-6 rounded-lg shadow-lg transition-all ${className}`} {...props}>
        {children}
      </button>
    );
  };
  
  export { Button };
  