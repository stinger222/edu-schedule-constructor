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

	it("Testing formatTimeString", () => {
		expect(utils.validateField("")).toBe(false)
		expect(utils.validateField(" ")).toBe(false)
		expect(utils.validateField("  ")).toBe(false)
		expect(utils.validateField(" anything ")).toBe(true)
		expect(utils.validateField("a")).toBe(true)
		expect(utils.validateField(" b")).toBe(true)
		expect(utils.validateField("undefined")).toBe(false)
		expect(utils.validateField(" undefined ")).toBe(false)
		expect(utils.validateField("  undefined ")).toBe(false)
	})

  // it("Testing formatClassSchedule", () => {
  //   expect(utils.formatClassSchedule({
  //     uid: "1", name: "1", classes: [
  //       {start: "2:2", end: "3:5"},
  //       {start: "4:30", end: "5:00"},
  //       {start: "10:0", end: "11:9"},
  //       {start: "12:00", end: "13:00"}
  //     ]
  //   }).classes).toEqual([
  //     {start: "02:02", end: "03:05"},
  //     {start: "04:30", end: "05:00"},
  //     {start: "10:00", end: "11:09"},
  //     {start: "12:00", end: "13:00"}
  //   ])
  // })
})