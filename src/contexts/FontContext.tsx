import React from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface Props {
  saveId: number;
  setSaveId: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue = {
  saveId: 0,
  setSaveId: () => {}
};

export const FontContext = React.createContext<Props>(defaultValue);

export const ProviderContext = (props: ProviderProps) => {
  const [saveId, setSaveId] = React.useState<number>(0);

  React.useEffect(() => {
    const data = localStorage.getItem('saveId');
    if (data) {
      setSaveId(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('saveId', JSON.stringify(saveId));
  }, [saveId]);

  const { children } = props;
  return (
    <FontContext.Provider value={{ saveId, setSaveId }}>
      {children}
    </FontContext.Provider>
  );
};
