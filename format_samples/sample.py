from __future__ import annotations

import json
from dataclasses import asdict, dataclass


@dataclass(frozen=True)
class Person:
    name: str
    age: int


def main() -> None:
    person = Person(name="Ada", age=28)
    print(json.dumps(asdict(person), ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

