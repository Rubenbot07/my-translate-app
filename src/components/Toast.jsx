import { useContext, useEffect, useState } from 'react'
import { TranslationContext } from '../context/TranslationContext'

export function Toast() {
  const { toast } = useContext(TranslationContext)
  const [progress, setProgress] = useState(100);
  useEffect(() => {
    if (toast) {
        setProgress(100);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev > 0) {
                    return prev - 1;
                } else {
                    clearInterval(interval);
                    return 0;
                }
            });
        }, 20);

        return () => clearInterval(interval);
    }
}, [toast]);


    return (
        <>
            {toast && (
                <div className="toast-container" > 
                    <p className="toast-text" role="alert" aria-live='assertive'>Copied to clipboard</p>
                    <div className="toast-progress" style={{ width: `${progress}%` }}></div>
                </div>
            )}
        </>
    )
}