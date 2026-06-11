import { useState } from 'react';
import './PasswordPage.css';

export default function PasswordPage({ onSuccess }) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // ALTERE AQUI PARA SUA DATA DE NAMORO
    // Formato: DIA e MÊS (4 dígitos)
    // Ex: 25 de Março = 2503
    const dataNamoro = '0612'; // <-- MUDE PARA SUA DATA

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password === dataNamoro) {
            onSuccess();
        } else {
            setError('Data incorreta... Tente novamente 💗');
            setPassword('');
        }
    };

    return (
        <div className="password-container">
            <div className="password-card">
                <span className="password-heart">💗</span>
                <h1 className="password-title">Um presente especial</h1>
                <p className="password-subtitle">
                    Para acessar, digite a data do nosso namoro<br />
                    <strong>(formato: DIA e MÊS - 4 dígitos)</strong>
                </p>
                
                <form onSubmit={handleSubmit} className="password-form">
                    <input
                        type="password"
                        className="password-input"
                        placeholder="Ex: 2503"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        maxLength={4}
                        pattern="[0-9]{4}"
                        inputMode="numeric"
                        autoFocus
                    />
                    <button type="submit" className="password-button">
                        Entrar
                    </button>
                </form>
                
                {error && <p className="password-error">{error}</p>}
                
                <p className="password-hint">
                    💡 Dica: É o dia que começamos a namorar
                </p>
            </div>
        </div>
    );
}