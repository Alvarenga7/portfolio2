'use client';

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function ModeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [clicked, setClicked] = useState(false);  // Estado para controlar o movimento do ícone

    // Garantir que o componente seja montado no cliente (evitar erro no SSR)
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    // Função para alternar o tema
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        setClicked(!clicked);  // Alterna o estado de clique a cada click
    };

    return (
        <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 w-6 p-2 ml-2"
            onClick={toggleTheme}  // Troca de tema ao clicar
        >
            {/* Ícones alternam com base no tema atual e animam para a direita ou voltam */}
            <div
                className={`transition-all transform ${clicked ? 'translate-x-4' : 'translate-x-0'} duration-300`} // Move para a direita e volta
            >
                {theme === 'dark' ? (
                    <Moon className="transition-all" />
                ) : (
                    <Sun className="transition-all" />
                )}
            </div>
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
