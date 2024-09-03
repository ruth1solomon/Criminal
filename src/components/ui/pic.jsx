// src/components/ui/card.jsx

export const Pic = ({ className, children, ...props }) => (
    <div className={`bg-white shadow rounded-lg overflow-hidden ${className}`} {...props}>
        {children}
    </div>
);

export const CardHeader = ({ className, children, ...props }) => (
    <div className={`px-4 py-3 border-b ${className}`} {...props}>
        {children}
    </div>
);

export const CardTitle = ({ className, children, ...props }) => (
    <h2 className={`text-lg font-semibold ${className}`} {...props}>
        {children}
    </h2>
);

export const CardContent = ({ className, children, ...props }) => (
    <div className={`px-4 py-5 ${className}`} {...props}>
        {children}
    </div>
);

export const CardFooter = ({ className, children, ...props }) => (
    <div className={`px-4 py-3 border-t ${className}`} {...props}>
        {children}
    </div>
);
