export class Entity<T> {
  constructor(
    protected readonly id: string,
    protected readonly props: T,
  ) { }
}
