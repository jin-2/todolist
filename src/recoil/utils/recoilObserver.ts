import { useEffect } from "react";
import { RecoilState, useRecoilValue } from "recoil";

interface RecoilObserverProps<T> {
  node: RecoilState<T>;
  onChange: (value: T) => void;
}

export const RecoilObserver = <T>({
  node,
  onChange,
}: RecoilObserverProps<T>) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};
