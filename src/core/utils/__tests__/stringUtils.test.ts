import * as utils from "../stringUtils"

describe("Testing helper functions with different arguments", () => {	
	it("Testing formatNumber", () => {
		expect(utils.formatNumber(NaN)).toBe("??")

		expect(utils.formatNumber(-9)).toBe("09")
		expect(utils.formatNumber(-1)).toBe("01")

		expect(utils.formatNumber(0)).toBe("00")
		expect(utils.formatNumber(1)).toBe("01")
		expect(utils.formatNumber(9)).toBe("09")
		expect(utils.formatNumber(10)).toBe("10")
		expect(utils.formatNumber(15)).toBe("15")
		expect(utils.formatNumber(100)).toBe("100")
	})
	
	it("Testing formatTimeString", () => {
		expect(utils.formatTimeString("10:30")).toBe("10:30")
		expect(utils.formatTimeString("10:4")).toBe("10:04")
		expect(utils.formatTimeString("0:7")).toBe("00:07")
		expect(utils.formatTimeString("05:09")).toBe("05:09")
		expect(utils.formatTimeString("0:0")).toBe("00:00")
		expect(utils.formatTimeString("1:1")).toBe("01:01")
		expect(utils.formatTimeString(":")).toBe("??:??")
		expect(utils.formatTimeString("")).toBe("??:??")
	})
})