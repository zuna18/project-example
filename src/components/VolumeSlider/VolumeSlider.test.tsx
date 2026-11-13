import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import VolumeSlider from './VolumeSlider';

describe('VolumeSlider Component', () => {
  it('debe renderizar con el valor inicial indicado', () => {
    render(<VolumeSlider label="Prueba" defaultValue={30} />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '30');
  });

  it('debe actualizar el valor al moverlo', () => {
    render(<VolumeSlider label="Prueba" defaultValue={30} />);
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: 70 } });
    expect(slider).toHaveAttribute('aria-valuenow', '70');
  });

  it('debe ejecutar la función onChange con el nuevo valor', () => {
    const handleChange = vi.fn();
    render(<VolumeSlider label="Prueba" defaultValue={30} onChange={handleChange} />);
    fireEvent.change(screen.getByRole('slider'), { target: { value: 70 } });
    expect(handleChange).toHaveBeenCalledWith(70);
  });

  it('debe mostrar el texto del label correctamente', () => {
    render(<VolumeSlider label="Volumen" />);
    expect(screen.getByText('Volumen')).toBeInTheDocument();
  });

  it('debe iniciar en 80 cuando defaultValue es 80', () => {
    render(<VolumeSlider label="Prueba" defaultValue={80} />);
    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '80');
  });
});
