

function ErrorComponent() {
    return (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-900">
            <div className="mx-auto max-w-md space-y-6 text-center">
                <div className="space-y-2">
                    <h1 className="text-6xl font-bold tracking-tighter text-red-500 
                    dark:text-red-400">404</h1>
                    <p className="text-3xl font-bold tracking-tighter text-gray-900 
                    dark:text-gray-50">Page not found</p>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>
                <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md 
                    bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow 
                    transition-colors hover:bg-gray-900/90 
                    focus-visible:outline-none focus-visible:ring-1 
                    focus-visible:ring-gray-950 disabled:pointer-events-none 
                    disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 
                    dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"

                >
                    Go back home
                </a>
            </div>
        </div>
    );
}

export default ErrorComponent;