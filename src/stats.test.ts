import { sum, average } from "./stats"
import * as statsAsync from "./statsAsync"
import { describe, expect, test, it } from './testLib'


describe("stats should ", () => {
    it("Test sum ", () => {
        const result = sum([1, 2, 3])
        const expected = 6
        expect(result).toBe(expected)
    })

    it("Test average ", () => {
        const result = average([1, 2, 3])
        const expected = 2
        expect(result).toBe(expected)
    })
})


describe("stats should async", () => {
    it("Test sum (async)", async () => {
        const result = await statsAsync.sum([1, 2, 3])
        const expected = 6
        expect(result).toBe(expected)
    })

    it("Test average (async)", async () => {
        const result = await statsAsync.average([1, 2, 3])
        const expected = 2
        expect(result).toBe(expected)
    })

})







