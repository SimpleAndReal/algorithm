export class Hash {
    private remainder = 67;
    private database: any[] = [];

    public setValue(key: string, value: any) {
        let index = this.getIndex(key);
        if (!this.database[index]) {
            this.database[index] = {
                key: key,
                next: null,
                value: value
            }
        } else {
            let current = this.database[index];
            while (current !== null) {
                if (current.key === key) {
                    current.value = value;
                    return current;
                }
                current = current.next;
            }
            current.next = {
                key: key,
                next: null,
                value: value
            };
        }

    }

    public getValue(key: string) {
        let index = this.getIndex(key);
        let temp = this.database[index];
        while (temp !== null) {
            if (temp.key === key) {
                return temp;
            }
            temp = temp.next;
        }
        return null;
    }

    private getIndex(key: string): number {
        if (key === undefined || key === "") {
            return -1;
        }
        let sum = 0;
        for (const char of key) {
            sum += char.charCodeAt(0)
        }
        return sum % this.remainder

    }

    //17 → 31 → 67 → 127 → 257 → 509 → 1021 → 2053 → 4099 → 8209

}