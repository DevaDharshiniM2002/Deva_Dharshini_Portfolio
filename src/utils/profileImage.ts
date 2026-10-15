import { useState, useEffect } from 'react';

const STORAGE_KEY = 'deva_custom_avatar_v1';
const DEFAULT_IMAGE = '/images/profile.jpg';

export function getProfileImage(): string {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.length > 50) return saved;
  } catch { /* ignore */ }
  return DEFAULT_IMAGE;
}

export function saveProfileImage(dataUrl: string): void {
  try { localStorage.setItem(STORAGE_KEY, dataUrl); } catch { /* ignore */ }
  window.dispatchEvent(new CustomEvent('deva_profile_image_updated', { detail: dataUrl }));
}

export function resetProfileImage(): void {
  try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
  window.dispatchEvent(new CustomEvent('deva_profile_image_updated', { detail: DEFAULT_IMAGE }));
}

export function useProfileImage() {
  const [profileImage, setProfileImage] = useState<string>(() => getProfileImage());

  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<string>;
      setProfileImage(ce.detail || DEFAULT_IMAGE);
    };
    window.addEventListener('deva_profile_image_updated', handler);
    return () => window.removeEventListener('deva_profile_image_updated', handler);
  }, []);

  const updateImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') saveProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return {
    profileImage,
    updateImage,
    resetToDefault: resetProfileImage,
    isCustom: profileImage !== DEFAULT_IMAGE,
  };
}
