/**
 *  Singleton
 *  - Stack 메모리에 한 번만 할당하여 이후에 최초 생성되었던 객체를 반환하는 패턴입니다.
 *  - 객체의 유일성을 보장해주는 패턴입니다.
 *  - 무분별한 인스턴스 생성을 방지 -> 메모리 낭비를 방지
 */
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return console.warn("Warning: Singleton class already instantiated");
        }
        Singleton.instance = this;
        this.version = Date.now();
        this.config = "config";
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}

// 1. 하나의 객체 인스턴스만 존재함
// 2. 스태틱 함수로 객체 접근이 가능
const s1 = new Singleton();
console.log(s1);
const s2 = new Singleton();
console.log(s2);

const s3 = Singleton.getInstance();
console.log(s3);
const s4 = Singleton.getInstance();
console.log(s4);
console.log(s3 === s4);