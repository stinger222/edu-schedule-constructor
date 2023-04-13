// import * as helpers from "../helpers"

// describe("Testing helper functions with different arguments", () => {	
// 	it("Testing formatNumber", () => {
// 		expect(helpers.formatNumber(NaN)).toBe("??")

// 		expect(helpers.formatNumber(-9)).toBe("09")
// 		expect(helpers.formatNumber(-1)).toBe("01")

// 		expect(helpers.formatNumber(0)).toBe("00")
// 		expect(helpers.formatNumber(1)).toBe("01")
// 		expect(helpers.formatNumber(9)).toBe("09")
// 		expect(helpers.formatNumber(10)).toBe("10")
// 		expect(helpers.formatNumber(15)).toBe("15")
// 		expect(helpers.formatNumber(100)).toBe("100")
// 	})
	
// 	it("Testing formatTimeString", () => {
// 		expect(helpers.formatTimeString("10:30")).toBe("10:30")
// 		expect(helpers.formatTimeString("10:4")).toBe("10:04")
// 		expect(helpers.formatTimeString("0:7")).toBe("00:07")
// 		expect(helpers.formatTimeString("05:09")).toBe("05:09")
// 		expect(helpers.formatTimeString("0:0")).toBe("00:00")
// 		expect(helpers.formatTimeString("1:1")).toBe("01:01")
// 		expect(helpers.formatTimeString(":")).toBe("??:??")
// 		expect(helpers.formatTimeString("")).toBe("??:??")
// 	})
// })