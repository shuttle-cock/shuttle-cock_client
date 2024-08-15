/**
 * 주어진 객체 타입의 값 타입을 추출합니다.
 *
 * @author chan9yu
 * @template T - 객체 타입
 */
type ValueOf<T> = T[keyof T];
