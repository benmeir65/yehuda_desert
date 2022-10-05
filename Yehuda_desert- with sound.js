(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Yehuda_desert_ with sound_atlas_1", frames: [[879,1218,340,152],[879,1372,456,92],[879,1466,337,111],[1415,0,172,306],[176,0,175,302],[0,306,172,307],[876,916,175,300],[177,1218,173,304],[176,304,175,302],[1238,304,172,307],[353,0,175,302],[353,304,175,302],[702,911,172,306],[1412,308,174,302],[1053,916,175,300],[0,0,174,304],[530,0,175,302],[1407,916,175,299],[530,304,175,302],[707,0,175,302],[699,608,175,301],[876,613,175,301],[707,304,175,302],[348,915,175,301],[0,917,175,301],[884,0,175,302],[1407,1217,175,299],[884,304,175,302],[174,608,172,307],[523,608,174,303],[525,913,175,301],[1053,613,175,301],[1230,916,175,300],[0,615,170,300],[1230,613,175,301],[1061,0,175,302],[1407,613,175,301],[702,1219,175,299],[528,1216,172,305],[1061,304,175,302],[0,1220,174,302],[348,608,173,305],[352,1218,174,302],[1238,0,175,302]]},
		{name:"Yehuda_desert_ with sound_atlas_2", frames: [[0,1866,456,116],[178,0,177,305],[178,307,177,305],[1601,310,177,300],[1238,1224,176,301],[1060,1225,176,302],[352,925,173,310],[176,618,174,309],[0,618,174,310],[176,929,174,309],[1420,1521,172,308],[357,0,177,305],[877,926,177,301],[1064,1529,176,302],[352,1237,173,310],[357,307,177,305],[527,1548,177,301],[1242,1527,176,301],[702,1237,177,301],[881,1229,177,301],[1594,1521,172,308],[1601,612,176,301],[706,1540,177,301],[0,930,174,310],[1779,612,176,301],[352,1549,173,310],[1768,1521,172,308],[1780,310,177,300],[1428,0,175,308],[1414,915,176,301],[528,614,173,310],[1416,1218,176,301],[536,0,177,305],[536,307,177,305],[703,614,173,310],[527,926,173,309],[1592,915,176,301],[1770,915,176,301],[0,1242,174,310],[1427,312,172,309],[1232,620,177,300],[885,1532,177,301],[0,1554,174,310],[715,0,177,305],[715,307,177,305],[176,1240,174,309],[0,0,176,307],[176,1551,174,309],[1594,1218,176,301],[1053,619,177,301],[894,0,177,305],[894,307,177,305],[1056,922,177,301],[1605,0,175,308],[1249,312,176,306],[1073,307,174,310],[527,1237,173,309],[878,614,173,310],[0,309,176,307],[1772,1218,176,301],[1235,922,177,300],[352,614,174,309],[702,926,173,309],[1252,0,174,310],[1782,0,175,308],[1073,0,177,305]]},
		{name:"Yehuda_desert_ with sound_atlas_3", frames: [[0,644,1196,320],[1198,644,596,320],[1753,0,291,272],[0,966,1775,200],[1336,322,367,272],[514,1490,1397,176],[0,0,1377,320],[0,1168,952,320],[0,322,1334,320],[1913,274,92,772],[1405,1668,176,307],[954,1168,178,305],[1670,1168,177,306],[1583,1668,176,307],[1849,1048,177,306],[1705,274,177,306],[1761,1668,176,307],[514,1668,177,306],[1314,1168,176,308],[1051,1668,175,309],[1228,1668,175,309],[693,1668,177,306],[1492,1168,176,308],[872,1668,177,306],[1134,1168,178,305],[0,1490,512,512],[1379,0,372,227]]},
		{name:"Yehuda_desert_ with sound_atlas_4", frames: [[0,1500,1488,320],[0,322,1732,320],[0,0,1794,320],[635,644,615,844],[0,644,633,854]]},
		{name:"Yehuda_desert_ with sound_atlas_5", frames: [[704,0,1007,651],[0,0,702,1796],[704,653,1104,585]]},
		{name:"Yehuda_desert_ with sound_atlas_6", frames: [[0,0,2000,669]]},
		{name:"Yehuda_desert_ with sound_atlas_7", frames: [[0,1127,2000,669],[0,0,2016,1125]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_138 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_137 = function() {
	this.initialize(img.CachedBmp_137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2423,368);


(lib.CachedBmp_136 = function() {
	this.initialize(img.CachedBmp_136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2354,303);


(lib.CachedBmp_135 = function() {
	this.initialize(img.CachedBmp_135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2537,348);


(lib.CachedBmp_134 = function() {
	this.initialize(img.CachedBmp_134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2537,348);


(lib.CachedBmp_133 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_132 = function() {
	this.initialize(img.CachedBmp_132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2517,368);


(lib.CachedBmp_131 = function() {
	this.initialize(img.CachedBmp_131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2065,200);


(lib.CachedBmp_130 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_128 = function() {
	this.initialize(img.CachedBmp_128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2722,624);


(lib.CachedBmp_127 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_126 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_125 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_124 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_123 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_122 = function() {
	this.initialize(img.CachedBmp_122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2331,368);


(lib.CachedBmp_121 = function() {
	this.initialize(img.CachedBmp_121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2481,703);


(lib.CachedBmp_120 = function() {
	this.initialize(img.CachedBmp_120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2835,833);


(lib.CachedBmp_119 = function() {
	this.initialize(img.CachedBmp_119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2830,966);


(lib.CachedBmp_118 = function() {
	this.initialize(img.CachedBmp_118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2835,833);


(lib.CachedBmp_117 = function() {
	this.initialize(img.CachedBmp_117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2830,966);


(lib.CachedBmp_116 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_115 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_114 = function() {
	this.initialize(img.CachedBmp_114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2077,320);


(lib.CachedBmp_113 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_112 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_111 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_109 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BMP_02386011_0d59_428b_960f_47d142ce8106 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BMP_03b5e1aa_c140_48aa_88a8_362977961e12 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BMP_04d89899_c242_4407_b6db_110658d41233 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0579ada9_23b1_4c24_a9fd_cab1ef636fca = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0607fbeb_74a2_48e4_971a_6234858c32e0 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BMP_06d0264c_bfdf_4ff0_a97c_8d195ccde56a = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0866be0a_693b_49e6_86bf_a72e8be1a175 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0b6622c9_2660_4368_811e_49c1983c86eb = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0ce6a6f9_adea_47a5_a3f1_3373c0aaedbe = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0eb38d8f_be64_4ade_bdaa_b04ecd0536e1 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0fb3a173_5286_47d9_83ae_61842d22e775 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BMP_10b717fc_836a_47fe_a9cd_02877904cbf6 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BMP_16cbd441_2345_405c_8a21_9d46e72a8aff = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BMP_1d89b04c_c5d3_4aeb_87c3_fccc021f189a = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BMP_1e01d8f9_992f_4c64_8024_13b7199f6d4e = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.BMP_1f267c57_7bde_4dd8_9730_ba2ece608c20 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BMP_23d3a926_a593_4a5e_87a9_47af9a5a2482 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BMP_27f004fc_697b_4035_ab98_47de74420d95 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BMP_28d0c0ed_e408_433d_bfb4_c9cd337683cf = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BMP_29e03580_fc12_4131_8216_978c0f477392 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.BMP_2a51e1d0_918a_4a6b_b1f0_a3c443b29adc = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.BMP_2c76ab17_2776_4e2f_beff_7d22e52affbf = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.BMP_3379b338_81f5_4727_87f8_29953f72c2ec = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BMP_344e93a8_e584_44bb_9975_9c6cb1eb1bfe = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BMP_349ae045_c53d_48f7_8995_74483184185b = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BMP_38301833_7040_431f_b174_6f3f729c427c = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BMP_3eb3fec7_fe39_4af5_8f54_fd179a2dde30 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BMP_3ff5bcd9_6dc7_4c69_8c26_05e27c31e6d4 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.BMP_4107f990_ca2a_4047_85a6_fbf4c0ae16b5 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.BMP_416bb638_a684_47ff_b1a0_da09fda9b612 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.BMP_420cecc1_bc49_4326_aa45_8d4e8a33690a = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.BMP_44c716ee_b2f6_4f54_9e65_339909e5dbbd = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.BMP_47ded13d_a319_42fc_9e85_14bf2170c74b = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.BMP_484ec44f_0a76_481f_965b_62a36db38785 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.BMP_485a9f87_a056_4931_9b03_eeea63e2212f = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.BMP_4869c35c_925a_42c8_a7de_4b2da235f43a = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.BMP_4993486c_9379_4d78_8885_a3a385d3821d = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.BMP_51d8099f_a8b4_437f_baa3_c68748f89d2e = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5289722c_ccc7_48a6_b628_0c844c38c4ab = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5430a764_0eec_4736_8117_cb28c29b9a8b = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5745e94d_d7d3_4bd5_aef6_03098fcfb8f1 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.BMP_57c7f92c_89ec_4d1e_a888_1bf08bebcafb = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5d5b7d0e_6cdf_4406_be6a_4f9b33fc3cad = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5d6e0bb0_740b_4b06_b451_e10a5c58d2f6 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5f481ae9_d4f1_4a4c_94e2_10f9510ca2a8 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.BMP_6009e20f_baae_4bbb_8d04_10979b2a2950 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.BMP_629b50b9_e5cc_4469_abb8_406bebfea8f8 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.BMP_63bcdde9_de6f_4527_9b9b_25f90ebd774f = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.BMP_64cfcb62_1501_4984_ab7d_9b1ad926b389 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.BMP_688a988b_93ef_4694_9342_82fc40e12577 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.BMP_6c68feb3_27ac_4254_a052_7b4b12929d48 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.BMP_72fc028e_9007_4a59_a6db_94b1508f2758 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.BMP_73975db6_c1e2_4760_9da0_2a11912de14c = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.BMP_7466749d_836f_4ddd_bc15_a0b5d337dd02 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.BMP_76c7fea2_8e61_4bfe_b131_e3977705c8cb = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.BMP_775f6ead_775e_4621_a27e_d1e55d37e010 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.BMP_78f9c475_d681_4dcf_b6be_17d8033c2c5a = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.BMP_79666b8a_b805_49e0_be76_e6f354ed8007 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.BMP_7f14201a_dd7b_42bd_a1db_15f96fedf1e0 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.BMP_82e4108e_cd89_41bd_b971_23945bad7a39 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.BMP_84265ded_72a6_4d0e_934a_dd1b3353b865 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.BMP_8643165c_7951_402d_9086_99d8da570908 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.BMP_8889c0af_031d_41a4_9111_417eb6ef1805 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.BMP_88b2c1f2_910e_4b61_9473_a1344e4a840c = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.BMP_8ae34b41_c82c_49ab_ac67_35ce309d6dc3 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.BMP_8c4752c3_2d17_4303_ab94_cf2b7801674b = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.BMP_8d199a9c_6806_4c7a_9bb5_71eb020171f4 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.BMP_8e65ae18_9467_4bdc_96ef_076b40338f73 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.BMP_90c3e7a1_d8b9_41f8_a171_78fb4aa30b41 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.BMP_911d5aae_e70a_4560_be4a_4c5de01be5cc = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.BMP_93817761_84b7_4d24_bfc1_130951094faf = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9507001d_d112_4af4_928c_d2d7af2052f4 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9a2a15d2_3c6e_4007_b054_a341bb208e0b = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9bb2e246_08fd_4408_a94b_65ad93eff78d = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9bf079bd_8288_4d38_bf3e_ce61903d653d = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9d140525_f3cb_4d1b_ba46_f583aa3e6155 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9f583e9e_3e93_430d_91ad_bc52c47663dd = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a0b7871c_80f9_4d25_92d7_c374ef5c93b6 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a2b1e76f_5ec6_4e5c_80da_01c2d490ab9c = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a32ba2c1_d427_45e9_93f7_c3ac87a4a650 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a4a2e01b_269f_4a4c_9fc7_de361b35b3e9 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a619944b_9cb1_4c65_ab8d_ce21c8690764 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a802b184_4914_4756_997f_85d9e8393a5d = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a8f5e69c_b860_43b4_8d20_cb5e1d40a9d0 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a90a9045_73a7_48f6_bab4_dc683b796e68 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a9836b45_68ae_447e_b09c_3fdf7faf30ba = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.BMP_afbdc6b5_2c7b_47e2_b99c_1483077deee5 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.BMP_b098f60c_9434_4fba_a17b_bd53b1a4711a = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.BMP_b8cd6a44_3646_4fd8_9db5_3b9387459b17 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ba049fe5_1dee_49a5_8d86_d68ab5a26be4 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ba380f77_821b_4fe6_b3f0_066b9f9af9d4 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ba6b9a61_3b32_4d83_82a3_be7c9f5abf1a = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.BMP_baed23f7_2bd6_4612_8a50_e0cc2d219a2e = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.BMP_bd2d5297_5923_4ab7_b72e_b4cd670e1721 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c1e5d2ed_ff28_46fb_a5ce_fe9c1e09bf91 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c334848a_314f_48e1_abcc_6acff9261099 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c52d85c3_655c_4701_9b38_b2ec5976d6c8 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c59fd084_5f5e_4f8f_b6f7_37224225b514 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c9eeebfd_9367_4fa4_83b0_91e5bbd00f9b = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ce229804_b35d_4ae1_99ee_cf1b94c13e33 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.BMP_cea6a72d_d64f_4149_8cb0_bcac335c92e2 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.BMP_cf040ece_0e02_4de2_a995_c42e1ca7c12a = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d17179a9_f0fb_49d4_a382_1c038c247e7d = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d1d53b25_ecee_4138_a2fd_c4c24793a0c5 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d26a97bd_19f8_48c4_8754_8e9a12560934 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d593c953_e7ea_4492_bd72_499dd6cabe61 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d7edb44d_d36e_48ae_a8ec_c3d6faa8fced = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.BMP_dae33f54_21f7_4c91_bf20_416208fb1828 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.BMP_db253430_8c02_4e05_a64b_ad2ed3aff6a1 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e221e209_84ad_4580_a7fd_1131728286a2 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e38107c0_0899_4c22_9102_a5920d88bff2 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e6fdb181_faa5_4c80_a08f_8ae461985f36 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ed47533e_e7bd_45ee_b53f_129af42be553 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ed5e8338_7684_4eec_aeaa_e3c2ca3729fb = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.BMP_efbbe1c8_c3b2_403b_af30_3866aaa6df15 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f00e0c50_5b3c_4dfa_a0df_2982262746c0 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f034e939_c9e9_446f_b3bb_0a5f3eff8683 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f0872c3a_f191_48b4_8321_2aa56d7e884e = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f3d4fa98_34c0_4e43_926d_9ca358555b9e = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f4b2772a_5539_4ba5_8fbf_a8c72306c804 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.BMP_fa83cb8f_8f33_4448_a624_521e9eebfc78 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.BMP_fd888113_b8fb_4c70_80d3_79ac03da368e = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_2"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ff99dea7_cc76_4bfd_a5a2_61c8b6384e38 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_1"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hot = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.kisspngtourguidedrawingtourismcliparttour5ac72f110d463799935334152300315305441 = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.last = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.tavlit = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.TAVLITjpgcopy = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.windremovebgpreviewpngcopy = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_3"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.שאלה = function() {
	this.initialize(ss["Yehuda_desert_ with sound_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WarpedAsset_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BMP_a619944b_9cb1_4c65_ab8d_ce21c8690764();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170,300);


(lib.WarpedAsset_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BMP_38301833_7040_431f_b174_6f3f729c427c();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633,854);


(lib.VAPOR_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AglBgQisjCAVh1QAVh1EVjCQi3DoCdDKQCeDJhLB9QhKB+i1CnQDdjsiqjDg");
	this.shape.setTransform(3.1279,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgZGlQAag3ATg4QAHgZACgYQAGhghLhYQiji8AThxQAThyEEi8QilDjCZDEQA9BOAZBCQAPAnADAjQADA7gdAxQgUAhgbAjQhRBqh0CCQAig3AYgzg");
	this.shape_1.setTransform(3.5243,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AglGbQAWg6AZhBQAKgaACgbQAGhchHhVQiai1ARhvQAQhvD0i1QiTDdCUC/QA9BNAYBBQAOAmACAjQADA7gfAzQgUAhgcAlQhWBvhiCHQAXg9ASg3g");
	this.shape_2.setTransform(3.9084,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgwGRQAQg+AhhIQAMgcADgdQAGhZhDhSQiSiuAPhsQAOhtDkiuQiCDXCQC6QA8BMAXA/QAOAmACAiQACA8ghA1QgVAigdAmQhaBzhRCNQAMhDANg7g");
	this.shape_3.setTransform(4.2933,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("Ag7GIQAKhCAphQQANgfAEgeQAGhXg+hPQiKinAMhpQAMhpDUioQhwDSCMC0QA7BKAWA/QANAkACAjQABA8giA3QgWAjgeAmQheB4hACTQAAhJAJg+g");
	this.shape_4.setTransform(4.68,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AhHF+QAFhGAwhXQARghAEghQAGhTg7hMQiBigAKhmQAJhnDEihQhfDMCICuQA6BKAWA+QANAjABAiQAAA9gkA5QgWAkgfAnQhjB9guCYQgLhPADhCg");
	this.shape_5.setTransform(5.0676,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AhTF0QAAhKA4heQASgjAGgjQAFhQg3hIQh4iaAIhjQAHhkCyibQhMDHCECoQA5BJAVA9QAMAiAAAiQAAA9glA7QgXAlghAoQhnCBgcCeQgXhVgChGg");
	this.shape_6.setTransform(5.4529,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AheFqQgFhNA+hmQAVglAGgmQAHhMg0hGQhwiTAGhgQAFhhCiiUQg7DBCACjQA4BHAUA8QAMAjAAAgQgBA+gnA9QgYAmghAoQhtCHgKCjQgihagHhLg");
	this.shape_7.setTransform(5.8371,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AhqFgQgKhRBGhuQAXgmAHgoQAGhJgwhDQhniMADhdQADhfCTiNQgqC7B7CeQA4BGATA7QALAhAAAhQgCA+gpA/QgYAmgjAqQhxCLAICpQgthggNhPg");
	this.shape_8.setTransform(6.2208,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("Ah1FXQgQhVBNh2QAagpAHgpQAHhFgshBQheiFAAhbQAAhbCDiHQgYC2B3CYQA3BFASA5QAKAhAAAhQgDA+gqBBQgZAngkArQh1CQAZCuQg4hmgShSg");
	this.shape_9.setTransform(6.5999,0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AiAFNQgWhZBVh9QAbgrAJgsQAHhBgog+QhWh+gChYQgChZByiAQgGCwBzCTQA2BDARA5QAKAggBAhQgDA+gsBEQgaAngkAsQh7CUArC0QhEhsgWhWg");
	this.shape_10.setTransform(6.9995,0.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AiMFDQgbhcBciFQAegtAJguQAHg+gkg8QhNh3gEhVQgFhVBih6QAMCrBvCMQA0BDARA3QAJAggBAgQgEA/guBGQgaAogmAsQh/CZA9C6QhPhygchag");
	this.shape_11.setTransform(7.3503,0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AiPE5QgghgBjiMQAggvAKgwQAHg7ggg5QhFhwgGhSQgGhTBRhzQAdClBrCHQA0BCAPA1QAJAggBAfQgFBAgwBIQgbApgmAtQiECeBPC/Qhbh4ghheg");
	this.shape_12.setTransform(6.8949,0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AiSEvQglhjBqiVQAigwALgyQAHg4gcg2Qg8hpgJhQQgJhQBChsQAvCfBmCCQAzBAAPA1QAIAegCAgQgFBAgyBKQgbApgoAvQiJCiBhDFQhmh+gmhig");
	this.shape_13.setTransform(6.4098,0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AiVEmQgqhoBxicQAlgyALg0QAIg1gZgzQg0hjgKhMQgLhNAxhmQBACaBjB8QAyA/ANAzQAIAegCAfQgGBCgzBLQgdAqgoAwQiOCnByDKQhwiDgshmg");
	this.shape_14.setTransform(5.9411,0.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AiYEcQgwhrB5ikQAng0AMg3QAHgxgUgwQgrhcgNhJQgNhLAghfQBSCUBfB3QAxA+ANAyQAHAdgDAfQgHBCg0BNQgdArgqAxQiSCrCEDQQh8iJgxhqg");
	this.shape_15.setTransform(5.4612,0.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AibESQg1hvCBiqQAog3ANg5QAIgugRguQgihUgPhHQgQhHAQhZQBjCPBbBwQAxA9AMAxQAGAdgDAeQgIBDg2BPQgdAsgrAxQiXCxCWDVQiIiPg2hug");
	this.shape_16.setTransform(4.9735,0.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AieEIQg6hzCHixQArg5AOg8QAIgrgNgqQgahOgRhDQgShFgBhSQB2CJBWBrQAwA8ALAwQAGAbgDAfQgJBDg4BRQgeAtgsAyQicC1CoDbQiTiVg7hyg");
	this.shape_17.setTransform(4.5042,0.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AigD+QhAh2CPi5QAtg7AOg+QAIgogIgnQgShHgUhBQgUhCgRhLQCHCDBTBmQAvA6AKAvQAFAbgDAeQgKBEg5BTQgfAugtAzQihC5C6DhQieibhAh2g");
	this.shape_18.setTransform(4.0287,0.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AijD1QhFh7CWjBQAvg9AQg/QAHglgEgkQgJhAgWg+QgXg/ghhFQCZB+BOBgQAvA5AIAuQAFAagEAeQgKBEg7BVQggAugtA1QimC+DMDmQiqihhFh5g");
	this.shape_19.setTransform(3.5269,0.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AimDrQhLh+CejJQCdjKi3joQEVDCAVB1QAVB1isDCQiqDDDdDsQi1inhKh9g");
	this.shape_20.setTransform(3.0684,0.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AhgE5QgogxgZgsQgYgogBguQAAgSADgTQAOhZBYhwQCZjEimjiQEEC8ATByQATByijC7QhHBUACBbQABAYAHAZQARA7AcA8QAYAzAjA4Qhmh1hOhhg");
	this.shape_21.setTransform(2.6907,0.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AhZEuQgpgzgagtQgZgqgBgvQAAgSADgSQANhWBYhvQCUi+iVjcQD0C1AQBwQARBviaC0QhEBRACBYQADAbAIAaIAwCCQATA4AXA9QhVh7hThmg");
	this.shape_22.setTransform(2.2763,0.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AhSEiQgqg0gbgvQgagsgBgvQAAgRADgTQANhUBWhsQCRi5iFjVQDjCvAPBtQAOBsiSCtQg/BPACBUQADAdALAcQAgBLARBCQAOA8ANBDQhGiBhXhsg");
	this.shape_23.setTransform(1.8869,0.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AhKEXQgtg2gcgwQgagugBgwQAAgRADgSQANhTBUhqQCNiyh0jPQDTCpAMBqQAMBpiJCmQg8BMADBSQAEAeAMAeQAoBTAMBFQAJBAABBJQg0iHhchxg");
	this.shape_24.setTransform(1.4737,0.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AhDEMQgug5gdgxQgbgwgBgwQAAgRADgSQANhQBThoQCIishjjJQDDCiAJBoQAKBmiACfQg4BJADBPQAEAhAPAgQAvBaAHBJQADBDgKBPQgjiOhhh1g");
	this.shape_25.setTransform(1.0861,0.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("Ag8EAQgwg6gdgyQgdgyAAgyQAAgQADgRQAMhPBShlQCEinhSjCQCyCcAHBlQAIBjh4CZQg1BGAEBLQAFAjASAiQA2BhACBNQgCBHgWBVQgSiUhmh7g");
	this.shape_26.setTransform(0.675,0.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("Ag0D1Qgyg8geg0Qgeg0AAgyQAAgQADgQQAMhNBRhkQCAighCi8QCiCVAFBjQAFBghvCSQgxBDAEBJQAGAlATAjQA+BpgEBQQgHBLghBbQAAiahriAg");
	this.shape_27.setTransform(0.288,0.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("AgtDpQgzg9gfg1Qgfg2AAgzQAAgPADgQQAMhMBPhhQB8iagyi2QCSCPADBgQAEBdhnCLQguBBAFBFQAGAnAWAmQBFBwgJBTQgMBPgtBhQARighwiGg");
	this.shape_28.setTransform(-0.1175,0.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AgmDeQg1g/gfg3Qggg4AAgyQAAgQACgQQAMhJBOhfQB4iUghiwQCBCJABBdQABBaheCEQgqA/AFBCQAIAoAXAoQBNB4gPBXQgRBTg4BmQAhinh0iKg");
	this.shape_29.setTransform(-0.4988,0.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCCCCC").s().p("AgfDTQg3hBgfg4Qghg6AAg0QAAgPACgPQAMhIBMhcQB0iPgQipQBxCCgCBbQgBBXhVB+QgmA8AFA+QAIArAaApQBUB/gUBbQgWBXhEBsQAzith6iPg");
	this.shape_30.setTransform(-0.874,0.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCCCC").s().p("AgXDHQg5hDghg4Qgig9ABg0QAAgPACgOQAMhHBLhaQBviIABijQBgB8gEBXQgDBVhNB3QgiA5AGA7QAJAtAcAsQBbCGgZBeQgcBbhPByQBEizh+iVg");
	this.shape_31.setTransform(-1.2674,0.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCCCCC").s().p("AgZC8Qg7hFghg6Qgjg9ABg2QAAgPACgOQAMhEBJhYQBsiCARidQBQB1gGBVQgGBShEBwQgeA2AFA6QALAuAeAtQBjCOggBiQggBehbB4QBVi6iDiZg");
	this.shape_32.setTransform(-0.7952,0.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CCCCCC").s().p("AgaCwQg8hGgig7QgkhAAAg2QAAgOADgOQALhDBIhVQBnh9AiiWQBABvgJBSQgHBPg8BpQgaA0AGA2QALAwAgAvQBqCWgkBlQgmBihmB+QBmjAiIifg");
	this.shape_33.setTransform(-0.3079,0.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CCCCCC").s().p("AgcClQg+hIgig9QglhBAAg4QAAgNADgOQALhABGhTQBkh3AyiQQAvBpgKBPQgKBMgzBiQgXAxAHA0QALAyAjAwQBxCdgqBpQgrBmhwCEQB2jGiNikg");
	this.shape_34.setTransform(0.1669,0.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CCCCCC").s().p("AgdCZQhAhJgjg+QgnhEABg4QABgNACgNQAKg/BGhQQBfhxBEiKQAeBigNBNQgMBJgqBbQgTAvAHAwQAMA1AlAyQB5CkgwBsQgwBrh8CJQCIjMiSiqg");
	this.shape_35.setTransform(0.6682,0.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCCCCC").s().p("AgfCOQhBhMgkg/QgnhFABg5QAAgNACgNQALg8BEhPQBbhrBUiDQAOBcgPBKQgOBGgjBUQgOAsAGAtQAOA3AnA1QCACrg1BwQg1BuiICPQCZjTiXiug");
	this.shape_36.setTransform(1.1497,0.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CCCCCC").s().p("AggCDQhEhOgkg/QgohJABg6QAAgMACgMQAKg7BDhMQBYhlBkh9QgCBVgSBIQgQBDgZBNQgMApAIArQAOA5ApA2QCHCyg6B0Qg7ByiTCVQCrjZicizg");
	this.shape_37.setTransform(1.643,0.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CCCCCC").s().p("AgiB3QhFhPglhBQgphKABg7IACgYQAKg5BBhJQBUhfB1h3QgTBPgUBFQgSBAgRBGQgHAnAIAnQAOA7AsA5QCOC5g/B3QhAB2ieCbQC7jfihi5g");
	this.shape_38.setTransform(2.1275,0.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CCCCCC").s().p("AgkBsQhGhRgmhCQgrhNACg7QAAgMACgLQAKg3BAhHQBPhZCGhxQgjBJgXBCQgUA9gIA/QgEAkAIAkQAQA9AtA7QCXDBhFB6QhGB6ipChQDMjlimi+g");
	this.shape_39.setTransform(2.632,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Tween46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.windremovebgpreviewpngcopy();
	this.instance.setTransform(-313,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313,-126,372,227);


(lib.Tween30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_138();
	this.instance.setTransform(-298.9,-216,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-298.9,-216,598,160);


(lib.Tween26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_137();
	this.instance.setTransform(-605.8,-92,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-605.8,-92,1211.5,184);


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_136();
	this.instance.setTransform(-588.35,-90.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-588.3,-90.3,1177,151.5);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_135();
	this.instance.setTransform(-634.15,-87,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-634.1,-87,1268.5,174);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_134();
	this.instance.setTransform(-634.15,-87,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-634.1,-87,1268.5,174);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.TAVLITjpgcopy();
	this.instance.setTransform(-640,-162.95,0.64,0.4872);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-162.9,1280.1,325.9);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.TAVLITjpgcopy();
	this.instance.setTransform(-640,-162.95,0.64,0.4872);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-162.9,1280.1,325.9);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_133();
	this.instance.setTransform(-149,-94.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149,-94.5,298,160);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_132();
	this.instance.setTransform(-629.15,-92,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-629.1,-92,1258.5,184);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.last();
	this.instance.setTransform(-552,-292.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-552,-292.5,1104,585);


(lib.text5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_131();
	this.instance.setTransform(-516.15,-116,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-516.1,-116,1032.5,100);


(lib.sunG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC400").s().p("AjkJZQhXBxhsDVQglj7ARjdQiBA/iuB8QBKjfBZipQipASjLBYQCfjKCaiIQiogkj1ASQDuiYDZhMQh1hajRhpQD8glDcARQg/iCh8isQDdBJCrBZQgRiohZjLQDJCdCJCbQAkimgTj3QCZDvBMDYQBZhzBqjTQAlD8gRDcQCAg+Cvh8QhKDdhZCqQCogRDMhZQifDKiaCIQCnAlD2gUQjtCYjaBNQBwBXDWBsQj7AljdgRQA/CCB8CtQjchJishZQASCoBYDLQjKifiIiaQgkClASD4QiXjthNjag");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-105.5,211.1,211.1);


(lib.sea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_130();
	this.instance.setTransform(-72.65,-68,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.6,-68,145.5,136);


(lib.Scene_1_desert = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// desert
	this.instance = new lib.שאלה();
	this.instance.setTransform(0,0,0.6349,0.64);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(790).to({_off:false},0).to({_off:true},111).wait(1250));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.QUETION = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_129();
	this.instance.setTransform(-443.85,-74,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-443.8,-74,887.5,100);


(lib.Q2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_128();
	this.instance.setTransform(-466.9,-96.25,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-466.9,-96.2,907.3,208);


(lib.HOT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hot();
	this.instance.setTransform(-86,-68,0.3372,0.2654);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-68,172.7,135.9);


(lib.hhar_hamercazi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_127();
	this.instance.setTransform(-91.8,-68,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-68,183.5,136);


(lib.hashfela = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_126();
	this.instance.setTransform(-85,-38,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-38,170,76);


(lib.GUIDEANIMATION = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.kisspngtourguidedrawingtourismcliparttour5ac72f110d463799935334152300315305441();
	this.instance.setTransform(91.95,-297.9,0.262,0.1659,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.9,-297.9,183.9,297.9);


(lib.grass_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_125();
	this.instance.setTransform(0,-100.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-100.5,503.5,325.5);


(lib.DROP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Layer_
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlPOgQiLjrAAlsQAAk/CqnKQA9ikBejUICVlMICWFMQBeDVA9CjQCqHKAAE/QAAFsiLDrQiHDljJAAQjIAAiHjlg");
	this.shape.setTransform(-7.0432,2.0793,0.0677,0.0677);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#27AAE1").s().p("EgOHAu/Qmkiik8ktQlBkyiumbQi1mtAAnwQABtqM+zpQEpnCHKpGQEClIHXpGQDbETH/J7QHLJHEoHBQM+TqABNpQAAHwi1GtQitGblCEyQk8EtmjCiQmqClnfAAQndAAmqilg");
	this.shape_1.setTransform(0.0284,-0.0262,0.0677,0.0677);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-21.5,31.299999999999997,43);


(lib.CLOUDG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(6.1).p("AqaEpIAAABQABAAAAAAIACABIACACQADABADABIAPAIQAEACAEACIA3AUIANADQACAAABAAQAIABAHABQAIABAJAAIAAAAQABAAABAAQAAAAABAAQAAAAABAAQABAAABAAQABAAAAAAQAFAAAFAAIAkgHQACgBACgBIABAAQAHgCAHgDQACgBACgBQAfAPAcABIAAAAQAHARAMAQQAXAfAqAZQAwAcAYALIABAAQAoASAiACIAYAAQAEgBAEgBQAFACAFAAQAeADAagVQAZgUAPglIACAEQABABAAACIAXAoQAVAjAeAPQAWALAUgEQAGABAGAAIAIAAQACAAACAAIALgCQAFgBAGgBIAMgFQAWAxAiAXQAoAbAmgXQAGACAGACQABABABAAQAAAAABAAQADABAEABIAQADQAFABAGAAQAEAAAFgBIAZgFQADgBADgBQAHgDAHgDQA2gcAhhLQAihMgDhVQAMAKANAAQAAAAABAAIASgEQAJgFAKgJQAgghgCgzQAMARAPAJQAPAIARAAIACAAQADAAADAAQACgBADAAQAqgGAbgtQAagqAFhAQAFg9gQg3QgThHgug0QgBgBAAAAQACgagEgbQgFgagKgXQgUgsgjgRQgkgQggATQANg+gbg8Qgag9gqgGQgpgFghAxQggAwACA/QgDgtgpgtQgegggiALQgeAUgEACQgLhPgsgwQgwgzhDADQhCADgsA7QgqA2gDBKQgRgkgfgKQgfgJgYAXQgYAYgIAuQgIAuAOAnQgpg8g7gSQg7gSg1AfQg2AegkBJQgkBIgFBWQgZgLgiAGQgkAIgfAZQhOA/ACCEQAAAJACASQACAbAYAjQAeArAwAcg");
	this.shape.setTransform(-0.0179,-0.0083);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFEJUIgQgDIgHgCIgBAAIgCgBIgMgEQgmAXgogbQgigXgWgxIgMAFIgLACIgLACIgEAAIgIAAIgMgBQgUAEgWgLQgegPgVgjIgXgoIgBgDIgCgEQgPAlgZAUQgaAVgegDIgKgCIgIACIgYAAQgigCgogSIgBAAQgYgLgwgcQgqgZgXgfQgMgQgHgRIAAAAQgcgBgfgPIgEACIgOAFIgBAAIgEACIgkAHIgKAAIgBAAIgCAAIgBAAIgBAAIgCAAIAAAAIgRgBIgPgCIgDAAIgNgDIg3gUIgIgEIgPgIIgGgCIgCgCIgCgBIgBAAIAAgBQgwgcgegrQgYgjgCgbIgCgbQgCiEBOg/QAfgZAkgIQAigGAZALQAFhWAkhIQAkhJA2geQA1gfA7ASQA7ASApA8QgOgnAIguQAIguAYgYQAYgXAfAJQAfAKARAkQADhKAqg2QAsg7BCgDQBDgDAwAzQAsAwALBPIAigWQAigLAeAgQApAtADAtQgCg/AggwQAhgxApAFQAqAGAaA9QAbA8gNA+QAggTAkAQQAjARAUAsQAKAXAFAaQAEAbgCAaIABABQAuA0ATBHQAQA3gFA9QgFBAgaAqQgbAtgqAGIgFABIgGAAIgCAAQgRAAgPgIQgPgJgMgRQACAzggAhQgKAJgJAFIgSAEIgBAAQgNAAgMgKQADBVgiBMQghBLg2AcIgOAGIgGACIgZAFIgJABIgLgBg");
	this.shape_1.setTransform(-0.0179,-0.0083);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.3,-79.3,162.8,156.1);


(lib.BUTTONEND = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-164.45,-59.4,0.976,1.0703);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.4,-59.4,328.9,118.8);


(lib.BUTTON = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_123();
	this.instance.setTransform(-128,-34.25,0.5,0.5);

	this.instance_1 = new lib.Bitmap5();
	this.instance_1.setTransform(-164.45,-59.4,0.976,1.0703);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.4,-59.4,328.9,118.8);


(lib.besirtonze = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_122();
	this.instance.setTransform(-483.7,-327.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_121();
	this.instance_1.setTransform(-520.25,-348.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-520.2,-348.8,1240.5,351.5);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.vaporX3_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.VAPOR_mc();
	this.instance.setTransform(-60,0);

	this.instance_1 = new lib.VAPOR_mc();
	this.instance_1.setTransform(60,0);

	this.instance_2 = new lib.VAPOR_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vaporX3_mc, null, null);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tavlit();
	this.instance.setTransform(-640.1,-254.5,0.6401,0.7608);

	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.setTransform(-1.65,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640.1,-254.5,1280.3000000000002,509);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tavlit();
	this.instance.setTransform(-640.1,-254.5,0.6401,0.7608);

	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.setTransform(-1.4,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640.1,-254.5,1280.3000000000002,509);


(lib.text4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween26("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-605.8,-92,1211.5,184);


(lib.text1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween21("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-634.1,-87,1268.5,174);


(lib.sunanimation_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6.1).p("AIgAAQAADhigCgQifCfjhAAQjgAAififQigigAAjhQAAjgCgifQCfigDgAAQDhAACfCgQCgCfAADgg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC400").s().p("Al/GBQigigAAjhQAAjgCgifQCfigDgAAQDhAACfCgQCgCfAADgQAADhigCgQifCfjhAAQjgAAififg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(28));

	// Layer_1
	this.instance = new lib.sunG("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1787,scaleY:1.1787,rotation:-29.9982},14).to({scaleX:1,scaleY:1,rotation:0},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_wind = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wind
	this.instance = new lib.Tween46("synched",0);
	this.instance.setTransform(0,397);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-315,-128,376,231);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1213).to({_off:false},0).to({x:525.9,y:356.95},59).wait(29).to({startPosition:0},0).to({alpha:0},22).to({_off:true},27).wait(801));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1213).to(new cjs.ColorFilter(0,0,0,1,204,204,204,0), 0).wait(911));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1213, endFrame:1213, x:-315, y:-128, w:376, h:231});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-315, y:-128, w:376, h:231});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_vapor3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// vapor3
	this.instance = new lib.vaporX3_mc();
	this.instance.setTransform(150.95,498.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1007).to({_off:false},0).to({alpha:1},51,cjs.Ease.none).wait(21).to({y:384},54,cjs.Ease.quadInOut).to({alpha:0},80,cjs.Ease.none).to({_off:true},1).wait(541).to({_off:false,x:1079.6,y:319.95},0).to({alpha:1},34).wait(26).to({alpha:0},15).to({_off:true},1).wait(320));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_text_midbaryehuda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text_midbaryehuda
	this.instance = new lib.Tween13("synched",0);
	this.instance.setTransform(963.25,417.55);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(464).to({_off:false},0).to({y:515.05,alpha:1},40,cjs.Ease.quadOut).to({_off:true},286).wait(147).to({_off:false,regY:65.5,x:958.95,y:660.65},0).to({_off:true},1096).wait(118));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_text_explain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text_explain
	this.instance = new lib.text1("synched",0);
	this.instance.setTransform(642.2,144.95);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween22("synched",0);
	this.instance_1.setTransform(642.2,121.4);

	this.instance_2 = new lib.Tween24("synched",0);
	this.instance_2.setTransform(640,110.85);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.text4("synched",0);
	this.instance_3.setTransform(640,121.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween26("synched",0);
	this.instance_4.setTransform(640,121.7);

	this.instance_5 = new lib.text5("synched",0);
	this.instance_5.setTransform(648.65,311.15,1,1,0,0,0,0,137.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween30("synched",0);
	this.instance_6.setTransform(682.2,237.85);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.CachedBmp_109();
	this.instance_7.setTransform(251.25,26,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_110();
	this.instance_8.setTransform(314.4,26,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_111();
	this.instance_9.setTransform(306.6,26,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_112();
	this.instance_10.setTransform(394.75,26,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_113();
	this.instance_11.setTransform(295.8,26,0.5,0.5);

	this.text = new cjs.Text("", "60px 'GuttmanYad-Brush'");
	this.text.textAlign = "center";
	this.text.lineHeight = 83;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-2112.55,350.65);

	this.instance_12 = new lib.CachedBmp_114();
	this.instance_12.setTransform(120.7,26,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_115();
	this.instance_13.setTransform(290.65,26,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_116();
	this.instance_14.setTransform(268,26,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},256).to({state:[{t:this.instance_1}]},18).to({state:[]},98).to({state:[{t:this.instance_2}]},78).to({state:[{t:this.instance_2}]},23).to({state:[{t:this.instance_3}]},89).to({state:[{t:this.instance_4}]},20).to({state:[{t:this.instance_5}]},97).to({state:[{t:this.instance_5}]},18).to({state:[]},93).to({state:[{t:this.instance_6}]},156).to({state:[{t:this.instance_6}]},18).to({state:[{t:this.instance_7}]},115).to({state:[{t:this.instance_8}]},135).to({state:[{t:this.instance_9}]},137).to({state:[{t:this.instance_10}]},100).to({state:[{t:this.text},{t:this.instance_11}]},99).to({state:[{t:this.instance_12}]},121).to({state:[{t:this.instance_13}]},152).to({state:[{t:this.instance_14}]},97).to({state:[]},112).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(256).to({_off:false},0).to({_off:true,y:121.4,alpha:1},18).wait(1877));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(450).to({_off:false},0).to({alpha:1},23).to({_off:true},89).wait(1589));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(562).to({_off:false},0).to({_off:true,alpha:1},20).wait(1569));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(679).to({_off:false},0).to({alpha:1},18).to({_off:true},93).wait(1361));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(946).to({_off:false},0).to({alpha:1},18).to({_off:true},115).wait(1072));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_tavlit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tavlit
	this.instance = new lib.Tween12("synched",0);
	this.instance.setTransform(640,909.9);
	this.instance._off = true;

	this.instance_1 = new lib.Tween14("synched",0);
	this.instance_1.setTransform(640,481.5);

	this.instance_2 = new lib.Tween17("synched",0);
	this.instance_2.setTransform(640,846.85);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween18("synched",0);
	this.instance_3.setTransform(640,559.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},221).to({state:[{t:this.instance_1}]},35).to({state:[]},534).to({state:[{t:this.instance_2}]},112).to({state:[{t:this.instance_3}]},35).to({state:[]},1097).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(221).to({_off:false},0).to({_off:true,y:481.5},35,cjs.Ease.quadOut).wait(1895));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(902).to({_off:false},0).to({_off:true,y:559.95},35,cjs.Ease.quadOut).wait(1214));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_QUETION = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// QUETION
	this.instance = new lib.QUETION("synched",0);
	this.instance.setTransform(637.1,107.25,0.3237,0.3237);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(372).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},30,cjs.Ease.quadOut).to({_off:true},38).wait(1711));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_mainquetion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mainquetion
	this.instance = new lib.Q2("synched",0);
	this.instance.setTransform(643.7,339.45,0.0004,0.0012);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(800).to({_off:false},0).to({scaleX:1.5,scaleY:1.5},56,cjs.Ease.quadOut).wait(1).to({startPosition:0},0).to({_off:true},44).wait(1250));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_last_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// last_text
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(640,-100.95);
	this.instance._off = true;

	this.instance_1 = new lib.CachedBmp_108();
	this.instance_1.setTransform(9.8,167.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2094).to({state:[{t:this.instance},{t:this.instance_1}]},15).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2094).to({_off:false},0).to({y:107.05},15,cjs.Ease.quadOut).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_last = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// last
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(640,1000.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2033).to({_off:false},0).to({x:631.75,y:494.45},55,cjs.Ease.quadOut).wait(63));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_intro_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// intro_text
	this.instance = new lib.besirtonze("synched",0);
	this.instance.setTransform(538.75,359.6,0.01,0.01);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(164).to({_off:false},0).to({scaleX:1,scaleY:1,x:538.8,y:359.65},37,cjs.Ease.quadOut).to({_off:true},20).wait(1930));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_hot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hot
	this.instance = new lib.HOT("synched",0);
	this.instance.setTransform(1078.05,321.6,0.0246,0.0312,0,0,0,0,1.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(698).to({_off:false},0).to({regX:0.1,regY:1.7,scaleX:1.1,scaleY:1.1,x:1078},19,cjs.Ease.quadIn).to({scaleX:1,scaleY:1,x:1078.05},8,cjs.Ease.quadOut).to({_off:true},65).wait(1361));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_grass = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// grass
	this.instance = new lib.grass_1("synched",0);
	this.instance.setTransform(604.4,527.65,1,0.2082,-8.2049,0,0,253.9,191.1);
	this.instance.alpha = 0.4414;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(574).to({_off:false},0).to({regX:254,regY:190.9,scaleY:0.4439,rotation:-8.2067,y:527.6,alpha:1},59,cjs.Ease.quadOut).to({_off:true},157).wait(1361));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.button = new lib.BUTTON();
	this.button.name = "button";
	this.button.setTransform(738.45,498.4);
	this.button._off = true;
	new cjs.ButtonHelper(this.button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(220).to({_off:false},0).to({_off:true},1).wait(1930));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_area1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// area1
	this.instance = new lib.sea("synched",0);
	this.instance.setTransform(119.95,313.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(266).to({_off:false},0).to({y:552.6,alpha:1},65,cjs.Ease.quadOut).to({_off:true},459).wait(147).to({_off:false,regY:68.1,y:703.8},0).to({_off:true},1096).wait(118));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_are3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// are3
	this.instance = new lib.hhar_hamercazi("synched",0);
	this.instance.setTransform(718.15,299.55);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(274).to({_off:false},0).to({x:713.15,y:620,alpha:1},64,cjs.Ease.quadOut).to({_off:true},452).wait(147).to({_off:false,y:652},0).to({_off:true},1096).wait(118));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_are_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// are_2
	this.instance = new lib.hashfela("synched",0);
	this.instance.setTransform(418.05,298.15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(270).to({_off:false},0).to({y:658.6,alpha:1},64,cjs.Ease.quadOut).to({_off:true},456).wait(147).to({_off:false},0).to({_off:true},1096).wait(118));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.PuppetShape_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_3("synched",0);

	this.instance_1 = new lib.BMP_63bcdde9_de6f_4527_9b9b_25f90ebd774f();
	this.instance_1.setTransform(71.15,0.5);

	this.instance_2 = new lib.BMP_775f6ead_775e_4621_a27e_d1e55d37e010();
	this.instance_2.setTransform(70.65,0.6);

	this.instance_3 = new lib.BMP_a802b184_4914_4756_997f_85d9e8393a5d();
	this.instance_3.setTransform(70.65,0.6);

	this.instance_4 = new lib.BMP_c59fd084_5f5e_4f8f_b6f7_37224225b514();
	this.instance_4.setTransform(70.35,0.55);

	this.instance_5 = new lib.BMP_c1e5d2ed_ff28_46fb_a5ce_fe9c1e09bf91();
	this.instance_5.setTransform(69.6,0.35);

	this.instance_6 = new lib.BMP_5d6e0bb0_740b_4b06_b451_e10a5c58d2f6();
	this.instance_6.setTransform(69.25,0.35);

	this.instance_7 = new lib.BMP_1d89b04c_c5d3_4aeb_87c3_fccc021f189a();
	this.instance_7.setTransform(68.25,0.15);

	this.instance_8 = new lib.BMP_57c7f92c_89ec_4d1e_a888_1bf08bebcafb();
	this.instance_8.setTransform(67.85,0.05);

	this.instance_9 = new lib.BMP_84265ded_72a6_4d0e_934a_dd1b3353b865();
	this.instance_9.setTransform(66.8,-0.1);

	this.instance_10 = new lib.BMP_9bb2e246_08fd_4408_a94b_65ad93eff78d();
	this.instance_10.setTransform(65.7,-0.25);

	this.instance_11 = new lib.BMP_9f583e9e_3e93_430d_91ad_bc52c47663dd();
	this.instance_11.setTransform(65.05,-0.35);

	this.instance_12 = new lib.BMP_1f267c57_7bde_4dd8_9730_ba2ece608c20();
	this.instance_12.setTransform(63.65,-0.55);

	this.instance_13 = new lib.BMP_10b717fc_836a_47fe_a9cd_02877904cbf6();
	this.instance_13.setTransform(62.35,-0.7);

	this.instance_14 = new lib.BMP_51d8099f_a8b4_437f_baa3_c68748f89d2e();
	this.instance_14.setTransform(60.25,-0.85);

	this.instance_15 = new lib.BMP_04d89899_c242_4407_b6db_110658d41233();
	this.instance_15.setTransform(58.8,-1);

	this.instance_16 = new lib.BMP_fa83cb8f_8f33_4448_a624_521e9eebfc78();
	this.instance_16.setTransform(57.25,-1);

	this.instance_17 = new lib.BMP_82e4108e_cd89_41bd_b971_23945bad7a39();
	this.instance_17.setTransform(53.9,-0.95);

	this.instance_18 = new lib.BMP_ff99dea7_cc76_4bfd_a5a2_61c8b6384e38();
	this.instance_18.setTransform(51.5,-0.9);

	this.instance_19 = new lib.BMP_76c7fea2_8e61_4bfe_b131_e3977705c8cb();
	this.instance_19.setTransform(48.55,-0.85);

	this.instance_20 = new lib.BMP_64cfcb62_1501_4984_ab7d_9b1ad926b389();
	this.instance_20.setTransform(45.65,-0.55);

	this.instance_21 = new lib.BMP_78f9c475_d681_4dcf_b6be_17d8033c2c5a();
	this.instance_21.setTransform(42.3,-0.25);

	this.instance_22 = new lib.BMP_afbdc6b5_2c7b_47e2_b99c_1483077deee5();
	this.instance_22.setTransform(38.95,0);

	this.instance_23 = new lib.BMP_a4a2e01b_269f_4a4c_9fc7_de361b35b3e9();
	this.instance_23.setTransform(35.25,0.55);

	this.instance_24 = new lib.BMP_e6fdb181_faa5_4c80_a08f_8ae461985f36();
	this.instance_24.setTransform(31.8,1.1);

	this.instance_25 = new lib.BMP_420cecc1_bc49_4326_aa45_8d4e8a33690a();
	this.instance_25.setTransform(28.05,0.8);

	this.instance_26 = new lib.BMP_9bf079bd_8288_4d38_bf3e_ce61903d653d();
	this.instance_26.setTransform(25.15,-0.45);

	this.instance_27 = new lib.BMP_2a51e1d0_918a_4a6b_b1f0_a3c443b29adc();
	this.instance_27.setTransform(21.15,-1.9);

	this.instance_28 = new lib.BMP_484ec44f_0a76_481f_965b_62a36db38785();
	this.instance_28.setTransform(16.9,-3.15);

	this.instance_29 = new lib.BMP_f4b2772a_5539_4ba5_8fbf_a8c72306c804();
	this.instance_29.setTransform(12.8,-4.35);

	this.instance_30 = new lib.BMP_02386011_0d59_428b_960f_47d142ce8106();
	this.instance_30.setTransform(8.3,-5.45);

	this.instance_31 = new lib.BMP_0607fbeb_74a2_48e4_971a_6234858c32e0();
	this.instance_31.setTransform(4.35,-6.3);

	this.instance_32 = new lib.BMP_0eb38d8f_be64_4ade_bdaa_b04ecd0536e1();
	this.instance_32.setTransform(0,-7);

	this.instance_33 = new lib.BMP_7466749d_836f_4ddd_bc15_a0b5d337dd02();
	this.instance_33.setTransform(-3.7,-7.75);

	this.instance_34 = new lib.BMP_a2b1e76f_5ec6_4e5c_80da_01c2d490ab9c();
	this.instance_34.setTransform(-8.35,-8.4);

	this.instance_35 = new lib.BMP_d1d53b25_ecee_4138_a2fd_c4c24793a0c5();
	this.instance_35.setTransform(-12,-8.9);

	this.instance_36 = new lib.BMP_4993486c_9379_4d78_8885_a3a385d3821d();
	this.instance_36.setTransform(-15.6,-9.15);

	this.instance_37 = new lib.BMP_9507001d_d112_4af4_928c_d2d7af2052f4();
	this.instance_37.setTransform(-19.1,-9.35);

	this.instance_38 = new lib.BMP_8ae34b41_c82c_49ab_ac67_35ce309d6dc3();
	this.instance_38.setTransform(-22.2,-9.4);

	this.instance_39 = new lib.BMP_a90a9045_73a7_48f6_bab4_dc683b796e68();
	this.instance_39.setTransform(-25.3,-9.4);

	this.instance_40 = new lib.BMP_cf040ece_0e02_4de2_a995_c42e1ca7c12a();
	this.instance_40.setTransform(-28.7,-9.15);

	this.instance_41 = new lib.BMP_a0b7871c_80f9_4d25_92d7_c374ef5c93b6();
	this.instance_41.setTransform(-30.95,-9.05);

	this.instance_42 = new lib.BMP_ba049fe5_1dee_49a5_8d86_d68ab5a26be4();
	this.instance_42.setTransform(-33.95,-8.7);

	this.instance_43 = new lib.BMP_e38107c0_0899_4c22_9102_a5920d88bff2();
	this.instance_43.setTransform(-35.75,-8.55);

	this.instance_44 = new lib.BMP_a32ba2c1_d427_45e9_93f7_c3ac87a4a650();
	this.instance_44.setTransform(-38.6,-8);

	this.instance_45 = new lib.BMP_c9eeebfd_9367_4fa4_83b0_91e5bbd00f9b();
	this.instance_45.setTransform(-40.35,-7.7);

	this.instance_46 = new lib.BMP_7f14201a_dd7b_42bd_a1db_15f96fedf1e0();
	this.instance_46.setTransform(-42.05,-7.35);

	this.instance_47 = new lib.BMP_90c3e7a1_d8b9_41f8_a171_78fb4aa30b41();
	this.instance_47.setTransform(-43.9,-6.9);

	this.instance_48 = new lib.BMP_03b5e1aa_c140_48aa_88a8_362977961e12();
	this.instance_48.setTransform(-45.35,-6.6);

	this.instance_49 = new lib.BMP_629b50b9_e5cc_4469_abb8_406bebfea8f8();
	this.instance_49.setTransform(-46.85,-6.15);

	this.instance_50 = new lib.BMP_cea6a72d_d64f_4149_8cb0_bcac335c92e2();
	this.instance_50.setTransform(-48.3,-5.6);

	this.instance_51 = new lib.BMP_44c716ee_b2f6_4f54_9e65_339909e5dbbd();
	this.instance_51.setTransform(-49.55,-5.25);

	this.instance_52 = new lib.BMP_416bb638_a684_47ff_b1a0_da09fda9b612();
	this.instance_52.setTransform(-50.7,-4.9);

	this.instance_53 = new lib.BMP_29e03580_fc12_4131_8216_978c0f477392();
	this.instance_53.setTransform(-51.15,-4.7);

	this.instance_54 = new lib.BMP_c52d85c3_655c_4701_9b38_b2ec5976d6c8();
	this.instance_54.setTransform(-52.25,-4.4);

	this.instance_55 = new lib.BMP_b098f60c_9434_4fba_a17b_bd53b1a4711a();
	this.instance_55.setTransform(-52.6,-4.15);

	this.instance_56 = new lib.BMP_fd888113_b8fb_4c70_80d3_79ac03da368e();
	this.instance_56.setTransform(-52.95,-4);

	this.instance_57 = new lib.BMP_5430a764_0eec_4736_8117_cb28c29b9a8b();
	this.instance_57.setTransform(-53.7,-3.7);

	this.instance_58 = new lib.BMP_a9836b45_68ae_447e_b09c_3fdf7faf30ba();
	this.instance_58.setTransform(-53.8,-3.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.8,-9.4,302,311);


(lib.PuppetShape_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_3379b338_81f5_4727_87f8_29953f72c2ec();
	this.instance_1.setTransform(24.4,-28.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-28.9,639.4,882.9);


(lib.PuppetShape_1copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_3("synched",0);

	this.instance_1 = new lib.BMP_27f004fc_697b_4035_ab98_47de74420d95();
	this.instance_1.setTransform(-54.2,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.2,-3.8,224.2,305);


(lib.PuppetShape_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_3("synched",0);

	this.instance_1 = new lib.BMP_ed47533e_e7bd_45ee_b53f_129af42be553();
	this.instance_1.setTransform(-54.2,-3.8);

	this.instance_2 = new lib.BMP_06d0264c_bfdf_4ff0_a97c_8d195ccde56a();
	this.instance_2.setTransform(-53.8,-3.75);

	this.instance_3 = new lib.BMP_3eb3fec7_fe39_4af5_8f54_fd179a2dde30();
	this.instance_3.setTransform(-53.7,-3.7);

	this.instance_4 = new lib.BMP_0579ada9_23b1_4c24_a9fd_cab1ef636fca();
	this.instance_4.setTransform(-53.7,-3.75);

	this.instance_5 = new lib.BMP_c334848a_314f_48e1_abcc_6acff9261099();
	this.instance_5.setTransform(-52.7,-4.2);

	this.instance_6 = new lib.BMP_8e65ae18_9467_4bdc_96ef_076b40338f73();
	this.instance_6.setTransform(-52.35,-4.35);

	this.instance_7 = new lib.BMP_93817761_84b7_4d24_bfc1_130951094faf();
	this.instance_7.setTransform(-51.45,-4.6);

	this.instance_8 = new lib.BMP_8643165c_7951_402d_9086_99d8da570908();
	this.instance_8.setTransform(-51.05,-4.75);

	this.instance_9 = new lib.BMP_e221e209_84ad_4580_a7fd_1131728286a2();
	this.instance_9.setTransform(-49.9,-5.1);

	this.instance_10 = new lib.BMP_ce229804_b35d_4ae1_99ee_cf1b94c13e33();
	this.instance_10.setTransform(-49.2,-5.45);

	this.instance_11 = new lib.BMP_ba380f77_821b_4fe6_b3f0_066b9f9af9d4();
	this.instance_11.setTransform(-47.95,-5.8);

	this.instance_12 = new lib.BMP_3ff5bcd9_6dc7_4c69_8c26_05e27c31e6d4();
	this.instance_12.setTransform(-46.4,-6.2);

	this.instance_13 = new lib.BMP_d593c953_e7ea_4492_bd72_499dd6cabe61();
	this.instance_13.setTransform(-45.2,-6.55);

	this.instance_14 = new lib.BMP_db253430_8c02_4e05_a64b_ad2ed3aff6a1();
	this.instance_14.setTransform(-43.55,-6.95);

	this.instance_15 = new lib.BMP_f034e939_c9e9_446f_b3bb_0a5f3eff8683();
	this.instance_15.setTransform(-41.9,-7.35);

	this.instance_16 = new lib.BMP_bd2d5297_5923_4ab7_b72e_b4cd670e1721();
	this.instance_16.setTransform(-39.95,-7.8);

	this.instance_17 = new lib.BMP_28d0c0ed_e408_433d_bfb4_c9cd337683cf();
	this.instance_17.setTransform(-37.5,-8.3);

	this.instance_18 = new lib.BMP_ba6b9a61_3b32_4d83_82a3_be7c9f5abf1a();
	this.instance_18.setTransform(-35.7,-8.5);

	this.instance_19 = new lib.BMP_344e93a8_e584_44bb_9975_9c6cb1eb1bfe();
	this.instance_19.setTransform(-33.6,-8.8);

	this.instance_20 = new lib.BMP_f00e0c50_5b3c_4dfa_a0df_2982262746c0();
	this.instance_20.setTransform(-30.9,-9.05);

	this.instance_21 = new lib.BMP_2c76ab17_2776_4e2f_beff_7d22e52affbf();
	this.instance_21.setTransform(-28.35,-9.2);

	this.instance_22 = new lib.BMP_688a988b_93ef_4694_9342_82fc40e12577();
	this.instance_22.setTransform(-25.3,-9.4);

	this.instance_23 = new lib.BMP_23d3a926_a593_4a5e_87a9_47af9a5a2482();
	this.instance_23.setTransform(-22.25,-9.4);

	this.instance_24 = new lib.BMP_d26a97bd_19f8_48c4_8754_8e9a12560934();
	this.instance_24.setTransform(-19.2,-9.4);

	this.instance_25 = new lib.BMP_73975db6_c1e2_4760_9da0_2a11912de14c();
	this.instance_25.setTransform(-16,-9.2);

	this.instance_26 = new lib.BMP_efbbe1c8_c3b2_403b_af30_3866aaa6df15();
	this.instance_26.setTransform(-12.45,-9);

	this.instance_27 = new lib.BMP_9a2a15d2_3c6e_4007_b054_a341bb208e0b();
	this.instance_27.setTransform(-8.85,-8.55);

	this.instance_28 = new lib.BMP_5f481ae9_d4f1_4a4c_94e2_10f9510ca2a8();
	this.instance_28.setTransform(-5.15,-7.95);

	this.instance_29 = new lib.BMP_349ae045_c53d_48f7_8995_74483184185b();
	this.instance_29.setTransform(-1.6,-7.35);

	this.instance_30 = new lib.BMP_8d199a9c_6806_4c7a_9bb5_71eb020171f4();
	this.instance_30.setTransform(1.8,-6.6);

	this.instance_31 = new lib.BMP_1e01d8f9_992f_4c64_8024_13b7199f6d4e();
	this.instance_31.setTransform(6.5,-5.75);

	this.instance_32 = new lib.BMP_ed5e8338_7684_4eec_aeaa_e3c2ca3729fb();
	this.instance_32.setTransform(10.1,-5);

	this.instance_33 = new lib.BMP_0b6622c9_2660_4368_811e_49c1983c86eb();
	this.instance_33.setTransform(14.65,-3.85);

	this.instance_34 = new lib.BMP_911d5aae_e70a_4560_be4a_4c5de01be5cc();
	this.instance_34.setTransform(18.3,-2.7);

	this.instance_35 = new lib.BMP_f3d4fa98_34c0_4e43_926d_9ca358555b9e();
	this.instance_35.setTransform(22,-1.55);

	this.instance_36 = new lib.BMP_d17179a9_f0fb_49d4_a382_1c038c247e7d();
	this.instance_36.setTransform(25.7,-0.15);

	this.instance_37 = new lib.BMP_8889c0af_031d_41a4_9111_417eb6ef1805();
	this.instance_37.setTransform(29.45,1.2);

	this.instance_38 = new lib.BMP_4869c35c_925a_42c8_a7de_4b2da235f43a();
	this.instance_38.setTransform(32.75,1.05);

	this.instance_39 = new lib.BMP_0866be0a_693b_49e6_86bf_a72e8be1a175();
	this.instance_39.setTransform(35.6,0.5);

	this.instance_40 = new lib.BMP_9d140525_f3cb_4d1b_ba46_f583aa3e6155();
	this.instance_40.setTransform(39.05,0);

	this.instance_41 = new lib.BMP_79666b8a_b805_49e0_be76_e6f354ed8007();
	this.instance_41.setTransform(42.3,-0.25);

	this.instance_42 = new lib.BMP_6c68feb3_27ac_4254_a052_7b4b12929d48();
	this.instance_42.setTransform(45.65,-0.55);

	this.instance_43 = new lib.BMP_5289722c_ccc7_48a6_b628_0c844c38c4ab();
	this.instance_43.setTransform(48.1,-0.8);

	this.instance_44 = new lib.BMP_b8cd6a44_3646_4fd8_9db5_3b9387459b17();
	this.instance_44.setTransform(51.45,-0.9);

	this.instance_45 = new lib.BMP_0ce6a6f9_adea_47a5_a3f1_3373c0aaedbe();
	this.instance_45.setTransform(53.85,-0.95);

	this.instance_46 = new lib.BMP_88b2c1f2_910e_4b61_9473_a1344e4a840c();
	this.instance_46.setTransform(56.75,-0.95);

	this.instance_47 = new lib.BMP_16cbd441_2345_405c_8a21_9d46e72a8aff();
	this.instance_47.setTransform(58.5,-0.9);

	this.instance_48 = new lib.BMP_485a9f87_a056_4931_9b03_eeea63e2212f();
	this.instance_48.setTransform(60.1,-0.85);

	this.instance_49 = new lib.BMP_f0872c3a_f191_48b4_8321_2aa56d7e884e();
	this.instance_49.setTransform(61.55,-0.8);

	this.instance_50 = new lib.BMP_47ded13d_a319_42fc_9e85_14bf2170c74b();
	this.instance_50.setTransform(62.65,-0.65);

	this.instance_51 = new lib.BMP_6009e20f_baae_4bbb_8d04_10979b2a2950();
	this.instance_51.setTransform(64.05,-0.5);

	this.instance_52 = new lib.BMP_baed23f7_2bd6_4612_8a50_e0cc2d219a2e();
	this.instance_52.setTransform(65.35,-0.25);

	this.instance_53 = new lib.BMP_8c4752c3_2d17_4303_ab94_cf2b7801674b();
	this.instance_53.setTransform(66.5,-0.15);

	this.instance_54 = new lib.BMP_d7edb44d_d36e_48ae_a8ec_c3d6faa8fced();
	this.instance_54.setTransform(67.05,-0.05);

	this.instance_55 = new lib.BMP_72fc028e_9007_4a59_a6db_94b1508f2758();
	this.instance_55.setTransform(67.9,0.05);

	this.instance_56 = new lib.BMP_4107f990_ca2a_4047_85a6_fbf4c0ae16b5();
	this.instance_56.setTransform(68.95,0.2);

	this.instance_57 = new lib.BMP_a8f5e69c_b860_43b4_8d20_cb5e1d40a9d0();
	this.instance_57.setTransform(69.25,0.35);

	this.instance_58 = new lib.BMP_5d5b7d0e_6cdf_4406_be6a_4f9b33fc3cad();
	this.instance_58.setTransform(69.55,0.4);

	this.instance_59 = new lib.BMP_5745e94d_d7d3_4bd5_aef6_03098fcfb8f1();
	this.instance_59.setTransform(70.35,0.55);

	this.instance_60 = new lib.BMP_0fb3a173_5286_47d9_83ae_61842d22e775();
	this.instance_60.setTransform(70.65,0.6);

	this.instance_61 = new lib.BMP_dae33f54_21f7_4c91_bf20_416208fb1828();
	this.instance_61.setTransform(70.65,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.2,-9.4,301.9,311);


(lib.NORAIN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6.1).p("Aj6B9ID6h9Ij5h8AAAAAID6h8AD6B9Ij6h9");
	this.shape.setTransform(0,6.5005);

	this.instance = new lib.DROP("synched",0);
	this.instance.setTransform(-2.05,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-21.5,56.1,43.5);


(lib.guide = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.GUIDEANIMATION("synched",0);
	this.instance.setTransform(0,0,1,1,-9.9999);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.999},6).to({rotation:-9.9999},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.3,-309.3,284.6,325.3);


(lib.DROPANIMATION = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.DROP("synched",0);
	this.instance.setTransform(-0.05,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:240},29).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-21.5,31.4,283);


(lib.CLOUDANIMATION_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CLOUDG("synched",0);
	this.instance.setTransform(1.1,-1.3,1,1,0,0,0,1.1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-1.4,scaleX:0.7,scaleY:0.7,y:-1.35},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.CLOUDANIMATION = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CLOUDG("synched",0);
	this.instance.setTransform(1.1,-1.3,1,1,0,0,0,1.1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-1.4,scaleX:0.7,scaleY:0.7,y:-1.35},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.1,-79.3,173.6,156.1);


(lib.button02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BUTTONEND();
	this.instance.setTransform(0,-59.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.4,-118.8,328.9,118.8);


(lib.BUTTONEND_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_124();
	this.instance.setTransform(-114.05,-25,0.5,0.5);

	this.instance_1 = new lib.button02();
	this.instance_1.setTransform(0,0,1,1,0,0,0,0,-59.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.4,-59.4,328.9,118.8);


(lib.tree1_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PuppetShape_1("synched",1,false);
	this.instance.setTransform(8.6,0,1,1,0,0,0,85,150);

	this.instance_1 = new lib.PuppetShape_5("synched",1,false);
	this.instance_1.setTransform(8.6,0,1,1,0,0,0,85,150);
	this.instance_1._off = true;

	this.instance_2 = new lib.PuppetShape_1copy("synched",1,false);
	this.instance_2.setTransform(8.6,0,1,1,0,0,0,85,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},61).to({state:[{t:this.instance_2}]},58).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},61,cjs.Ease.quadInOut).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},61,cjs.Ease.quadInOut).to({_off:true},58,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.TREE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PuppetShape_2("synched",1,false);
	this.instance.setTransform(-45.35,-372.5,0.4997,0.4263,0,14.7745,14.5294);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.1,-381.4,389.20000000000005,425);


(lib.SUN02_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sunanimation_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SUN02_mc, null, null);


(lib.Scene_1_tree1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tree1
	this.instance = new lib.tree1_mc();
	this.instance.setTransform(81.5,363.85,0.5907,0.5907,0,0,0,0,0.1);

	this.instance_1 = new lib.tree1_mc();
	this.instance_1.setTransform(185.05,373.3,0.4978,0.4978,0,0,180);

	this.instance_2 = new lib.tree1_mc();
	this.instance_2.setTransform(1028.25,398.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},221).wait(1930));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tree
	this.instance = new lib.TREE("synched",0);
	this.instance.setTransform(1087.95,609.1,0.1996,0.1779);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1921).to({_off:false},0).to({scaleX:0.7533,scaleY:0.8306,x:1087.9},31).to({_off:true},81).wait(118));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sun1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun1
	this.instance = new lib.SUN02_mc();
	this.instance.setTransform(127.35,136.45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(964).to({_off:false},0).to({alpha:1},42).wait(207).to({alpha:0},59).to({_off:true},1).wait(878));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_NO_RAIN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// NO_RAIN
	this.instance = new lib.NORAIN("synched",0);
	this.instance.setTransform(1079.55,439.35,0.3174,0.3174,0,0,0,0,0.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1823).to({_off:false},0).to({regY:0.4,scaleX:3.0546,scaleY:3.0546,x:1079.5,y:439.55},23,cjs.Ease.quadIn).to({regY:0.3,scaleX:2.6998,scaleY:2.6999,x:1079.55,y:439.3},7,cjs.Ease.quadOut).to({_off:true},68).wait(230));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_guide = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// guide
	this.instance = new lib.guide("synched",0);
	this.instance.setTransform(809.95,325.9,0.3045,0.3045);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(62).to({_off:false},0).wait(1).to({regY:-146.7,scaleX:0.3064,scaleY:0.3064,x:808.7,y:281.15,startPosition:1},0).wait(1).to({scaleX:0.3084,scaleY:0.3084,x:808,y:281,startPosition:2},0).wait(1).to({scaleX:0.3105,scaleY:0.3105,x:806.9,y:280.95,startPosition:3},0).wait(1).to({scaleX:0.3128,scaleY:0.3128,x:805.9,y:280.8,startPosition:4},0).wait(1).to({scaleX:0.3153,scaleY:0.3153,x:804.8,y:280.65,startPosition:5},0).wait(1).to({scaleX:0.3179,scaleY:0.3179,x:803.65,y:280.5,startPosition:6},0).wait(1).to({scaleX:0.3206,scaleY:0.3206,x:802.4,y:280.35,startPosition:7},0).wait(1).to({scaleX:0.3235,scaleY:0.3235,x:801.05,y:280.25,startPosition:8},0).wait(1).to({scaleX:0.3266,scaleY:0.3266,x:799.65,y:280.1,startPosition:9},0).wait(1).to({scaleX:0.3299,scaleY:0.3299,x:798.2,y:279.9,startPosition:10},0).wait(1).to({scaleX:0.3334,scaleY:0.3334,x:796.6,y:279.75,startPosition:11},0).wait(1).to({scaleX:0.337,scaleY:0.337,x:795,y:279.55,startPosition:12},0).wait(1).to({scaleX:0.3408,scaleY:0.3408,x:793.25,y:279.35,startPosition:0},0).wait(1).to({scaleX:0.3449,scaleY:0.3449,x:791.45,y:279.15,startPosition:1},0).wait(1).to({scaleX:0.3491,scaleY:0.3491,x:789.55,y:279,startPosition:2},0).wait(1).to({scaleX:0.3535,scaleY:0.3535,x:787.55,y:278.8,startPosition:3},0).wait(1).to({scaleX:0.3582,scaleY:0.3582,x:785.45,y:278.55,startPosition:4},0).wait(1).to({scaleX:0.363,scaleY:0.363,x:783.25,y:278.35,startPosition:5},0).wait(1).to({scaleX:0.3681,scaleY:0.3681,x:780.95,y:278.15,startPosition:6},0).wait(1).to({scaleX:0.3735,scaleY:0.3735,x:778.55,y:277.9,startPosition:7},0).wait(1).to({scaleX:0.3791,scaleY:0.3791,x:776.05,y:277.7,startPosition:8},0).wait(1).to({scaleX:0.3849,scaleY:0.3849,x:773.4,y:277.45,startPosition:9},0).wait(1).to({scaleX:0.391,scaleY:0.391,x:770.65,y:277.2,startPosition:10},0).wait(1).to({scaleX:0.3973,scaleY:0.3973,x:767.8,y:276.95,startPosition:11},0).wait(1).to({scaleX:0.404,scaleY:0.404,x:764.8,y:276.75,startPosition:12},0).wait(1).to({scaleX:0.4109,scaleY:0.4109,x:761.7,y:276.5,startPosition:0},0).wait(1).to({scaleX:0.4181,scaleY:0.4181,x:758.45,y:276.3,startPosition:1},0).wait(1).to({scaleX:0.4256,scaleY:0.4256,x:755.1,y:276.05,startPosition:2},0).wait(1).to({scaleX:0.4334,scaleY:0.4334,x:751.55,y:275.85,startPosition:3},0).wait(1).to({scaleX:0.4415,scaleY:0.4415,x:747.9,y:275.7,startPosition:4},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:744.1,y:275.5,startPosition:5},0).wait(1).to({scaleX:0.4588,scaleY:0.4588,x:740.15,y:275.3,startPosition:6},0).wait(1).to({scaleX:0.4679,scaleY:0.4679,x:736.05,y:275.15,startPosition:7},0).wait(1).to({scaleX:0.4774,scaleY:0.4774,x:731.75,y:275.05,startPosition:8},0).wait(1).to({scaleX:0.4873,scaleY:0.4873,x:727.3,y:274.95,startPosition:9},0).wait(1).to({scaleX:0.4975,scaleY:0.4975,x:722.7,y:274.85,startPosition:10},0).wait(1).to({scaleX:0.5081,scaleY:0.5081,x:717.95,startPosition:11},0).wait(1).to({scaleX:0.5191,scaleY:0.5191,x:713,y:274.9,startPosition:12},0).wait(1).to({scaleX:0.5305,scaleY:0.5305,x:707.9,y:275,startPosition:0},0).wait(1).to({scaleX:0.5422,scaleY:0.5422,x:702.6,y:275.1,startPosition:1},0).wait(1).to({scaleX:0.5544,scaleY:0.5544,x:697.15,y:275.35,startPosition:2},0).wait(1).to({scaleX:0.567,scaleY:0.567,x:691.5,y:275.65,startPosition:3},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:685.65,y:276.05,startPosition:4},0).wait(1).to({scaleX:0.5935,scaleY:0.5935,x:679.65,y:276.6,startPosition:5},0).wait(1).to({scaleX:0.6073,scaleY:0.6073,x:673.45,y:277.25,startPosition:6},0).wait(1).to({scaleX:0.6216,scaleY:0.6216,x:667.1,y:278.1,startPosition:7},0).wait(1).to({scaleX:0.6362,scaleY:0.6362,x:660.55,y:279.15,startPosition:8},0).wait(1).to({scaleX:0.6513,scaleY:0.6513,x:653.9,y:280.4,startPosition:9},0).wait(1).to({scaleX:0.6668,scaleY:0.6668,x:647.05,y:281.95,startPosition:10},0).wait(1).to({scaleX:0.6827,scaleY:0.6827,x:640.1,y:283.8,startPosition:11},0).wait(1).to({scaleX:0.699,scaleY:0.699,x:633.05,y:286,startPosition:12},0).wait(1).to({scaleX:0.7156,scaleY:0.7156,x:625.95,y:288.7,startPosition:0},0).wait(1).to({scaleX:0.7326,scaleY:0.7326,x:618.85,y:291.9,startPosition:1},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:611.85,y:295.85,startPosition:2},0).wait(1).to({scaleX:0.7676,scaleY:0.7676,x:605.05,y:300.55,startPosition:3},0).wait(1).to({scaleX:0.7856,scaleY:0.7856,x:598.7,y:306.25,startPosition:4},0).wait(1).to({scaleX:0.8038,scaleY:0.8038,x:593.05,y:313.15,startPosition:5},0).wait(1).to({scaleX:0.8223,scaleY:0.8223,x:588.6,y:321.25,startPosition:6},0).wait(1).to({scaleX:0.841,scaleY:0.841,x:585.8,y:330.6,startPosition:7},0).wait(1).to({scaleX:0.8598,scaleY:0.8598,x:585.05,y:340.65,startPosition:8},0).wait(1).to({scaleX:0.8788,scaleY:0.8788,x:586.2,y:350.75,startPosition:9},0).wait(1).to({scaleX:0.898,scaleY:0.898,x:586.3,y:360.35,startPosition:10},0).wait(1).to({scaleX:0.9172,scaleY:0.9172,x:584.75,y:369.95,startPosition:11},0).wait(1).to({scaleX:0.9365,scaleY:0.9365,x:581.3,y:379.45,startPosition:12},0).wait(1).to({scaleX:0.9558,scaleY:0.9558,x:574.3,y:391.2,startPosition:0},0).wait(1).to({scaleX:0.9751,scaleY:0.9751,x:563.25,y:403.2,startPosition:1},0).wait(1).to({scaleX:0.9944,scaleY:0.9944,x:549,y:413.65,startPosition:2},0).wait(1).to({scaleX:1.0137,scaleY:1.0137,x:533.4,y:421.9,startPosition:3},0).wait(1).to({scaleX:1.0329,scaleY:1.0329,x:517.8,y:427.8,startPosition:4},0).wait(1).to({scaleX:1.0519,scaleY:1.0519,x:502.8,y:432,startPosition:5},0).wait(1).to({scaleX:1.0709,scaleY:1.0709,x:488.55,y:434.85,startPosition:6},0).wait(1).to({scaleX:1.0897,scaleY:1.0897,x:474.85,y:436.85,startPosition:7},0).wait(1).to({scaleX:1.1083,scaleY:1.1083,x:461.65,y:438.15,startPosition:8},0).wait(1).to({scaleX:1.1268,scaleY:1.1268,x:448.9,y:438.95,startPosition:9},0).wait(1).to({scaleX:1.145,scaleY:1.145,x:436.55,y:439.3,startPosition:10},0).wait(1).to({scaleX:1.1631,scaleY:1.1631,x:424.55,y:439.35,startPosition:11},0).wait(1).to({scaleX:1.181,scaleY:1.181,x:412.5,y:439.2,startPosition:12},0).wait(1).to({scaleX:1.1986,scaleY:1.1986,x:400.4,y:438.85,startPosition:0},0).wait(1).to({regY:0,scaleX:1.216,scaleY:1.216,x:388.7,y:616.75,startPosition:1},0).to({scaleX:1.2393,scaleY:1.2393,guide:{path:[388.7,616.7,381.7,617.8,374.4,618.9]},mode:"single",startPosition:2},1).wait(1).to({startPosition:3},0).to({_off:true},78).wait(1930));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cloud3
	this.instance = new lib.CLOUDANIMATION("single",0);
	this.instance.setTransform(347.6,394.2,1,1,0,0,0,1.1,-1.3);
	this.instance.alpha = 0;
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-93,-81,178,160);

	this.instance_1 = new lib.CLOUDANIMATION_mc();
	this.instance_1.setTransform(809.95,325.9,1,1,0,0,0,1.1,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1140).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance}]},44).to({state:[{t:this.instance}]},59).to({state:[{t:this.instance_1}]},78).to({state:[{t:this.instance}]},102).to({state:[{t:this.instance}]},23).to({state:[{t:this.instance}]},76).to({state:[{t:this.instance}]},94).to({state:[{t:this.instance}]},28).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},63).to({state:[{t:this.instance}]},24).to({state:[]},75).wait(297));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1140).to({_off:false},0).to({alpha:1},29).wait(44).to({startPosition:0},0).to({x:809.95,y:325.9},59).to({_off:true},78).wait(102).to({_off:false},0).to({startPosition:0},23).wait(76).to({startPosition:0},0).to({x:1158,y:437.95},94).wait(28).to({startPosition:0},0).to({startPosition:0},19).wait(63).to({startPosition:0},0).to({alpha:0},24).to({_off:true},75).wait(297));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1140).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 29).wait(44).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 59).wait(102).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).to(new cjs.ColorFilter(0,0,0,1,76,76,76,0), 23).wait(198).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 19).wait(63).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 24).wait(297));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1140, endFrame:1140, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1141, endFrame:1169, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1170, endFrame:1213, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1214, endFrame:1272, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1273, endFrame:1350, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1452, endFrame:1452, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1453, endFrame:1475, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1476, endFrame:1551, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1552, endFrame:1645, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1646, endFrame:1673, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1674, endFrame:1692, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1693, endFrame:1755, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1756, endFrame:1779, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1780, endFrame:1854, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1854, endFrame:2151, x:-93, y:-81, w:178, h:160});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cloud2
	this.instance = new lib.CLOUDANIMATION("single",0);
	this.instance.setTransform(236.35,406.45,1,1,180);
	this.instance.alpha = 0;
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-93,-81,178,160);

	this.instance_1 = new lib.CLOUDANIMATION_mc();
	this.instance_1.setTransform(699,330,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1137).to({state:[{t:this.instance}]},28).to({state:[{t:this.instance}]},48).to({state:[{t:this.instance}]},59).to({state:[{t:this.instance_1}]},78).to({state:[{t:this.instance}]},102).to({state:[{t:this.instance}]},21).to({state:[{t:this.instance}]},78).to({state:[{t:this.instance}]},94).to({state:[{t:this.instance}]},32).to({state:[{t:this.instance}]},23).to({state:[{t:this.instance}]},55).to({state:[{t:this.instance}]},29).to({state:[]},39).wait(328));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1137).to({_off:false},0).to({alpha:1},28).wait(48).to({startPosition:0},0).to({x:699,y:330},59).to({_off:true},78).wait(102).to({_off:false},0).to({startPosition:0},21).wait(78).to({startPosition:0},0).to({x:1079.6,y:379.6},94).wait(32).to({startPosition:0},0).to({startPosition:0},23).wait(55).to({startPosition:0},0).to({alpha:0},29).to({_off:true},39).wait(328));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1137).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 28).wait(48).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 59).wait(102).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).to(new cjs.ColorFilter(0,0,0,1,153,153,153,0), 21).wait(204).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 23).wait(55).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 29).wait(328));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1137, endFrame:1137, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1138, endFrame:1165, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1166, endFrame:1213, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1214, endFrame:1272, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1273, endFrame:1350, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1452, endFrame:1452, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1453, endFrame:1473, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1474, endFrame:1551, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1552, endFrame:1645, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1646, endFrame:1677, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1678, endFrame:1700, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1701, endFrame:1755, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1756, endFrame:1784, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1785, endFrame:1823, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1823, endFrame:2151, x:-93, y:-81, w:178, h:160});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cloud1
	this.instance = new lib.CLOUDANIMATION("single",0);
	this.instance.setTransform(111.3,396.5,1,1,0,0,180);
	this.instance.alpha = 0;
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-93,-81,178,160);

	this.instance_1 = new lib.CLOUDANIMATION_mc();
	this.instance_1.setTransform(585.85,339.9,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1133).to({state:[{t:this.instance}]},28).to({state:[{t:this.instance}]},52).to({state:[{t:this.instance}]},59).to({state:[{t:this.instance_1}]},78).to({state:[{t:this.instance}]},102).to({state:[{t:this.instance}]},18).to({state:[{t:this.instance}]},81).to({state:[{t:this.instance}]},94).to({state:[{t:this.instance}]},35).to({state:[{t:this.instance}]},28).to({state:[{t:this.instance}]},47).to({state:[{t:this.instance}]},33).to({state:[]},35).wait(328));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1133).to({_off:false},0).to({alpha:1},28).wait(52).to({startPosition:0},0).to({x:585.85,y:339.9},59).to({_off:true},78).wait(102).to({_off:false},0).to({startPosition:0},18).wait(81).to({startPosition:0},0).to({x:953.95},94).wait(35).to({startPosition:0},0).to({startPosition:0},28).wait(47).to({startPosition:0},0).to({alpha:0},33).to({_off:true},35).wait(328));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1133).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 28).wait(52).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 59).wait(102).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).to(new cjs.ColorFilter(0,0,0,1,204,204,204,0), 18).wait(210).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 28).wait(47).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 33).wait(328));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1133, endFrame:1133, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1134, endFrame:1161, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1162, endFrame:1213, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1214, endFrame:1272, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1273, endFrame:1350, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1452, endFrame:1452, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1453, endFrame:1470, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1471, endFrame:1551, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1552, endFrame:1645, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1646, endFrame:1680, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1681, endFrame:1708, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1709, endFrame:1755, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1756, endFrame:1788, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1789, endFrame:1823, x:-93, y:-81, w:178, h:160});
	this.filterCacheList.push({instance: this.instance, startFrame:1823, endFrame:2151, x:-93, y:-81, w:178, h:160});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bachground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bachground
	this.instance = new lib.CachedBmp_118();
	this.instance.setTransform(-125.2,319.9,0.5,0.5);

	this.instance_1 = new lib.tree1_mc();
	this.instance_1.setTransform(379.85,307.1,0.4397,0.4397,29.9964,0,0,0.2,0);
	var instance_1Filter_1 = new cjs.ColorFilter(0,0,0,1,168,105,54,0);
	this.instance_1.filters = [instance_1Filter_1];

	this.instance_2 = new lib.tree1_mc();
	this.instance_2.setTransform(523.25,285.15,0.4398,0.4398,14.9978,0,0,0.1,-0.1);
	var instance_2Filter_2 = new cjs.ColorFilter(0,0,0,1,168,105,54,0);
	this.instance_2.filters = [instance_2Filter_2];

	this.instance_3 = new lib.CachedBmp_117();
	this.instance_3.setTransform(-123.55,254.35,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_120();
	this.instance_4.setTransform(-125.2,319.9,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_119();
	this.instance_5.setTransform(-123.55,254.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_5},{t:this.instance_2},{t:this.instance_1},{t:this.instance_4}]},35).to({state:[]},186).wait(1930));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1965));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_2).wait(1965));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.RAIN_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.DROPANIMATION("synched",17);
	this.instance.setTransform(-5.1,16.8,1,1,14.9983);

	this.instance_1 = new lib.DROPANIMATION("synched",27);
	this.instance_1.setTransform(-5.1,16.8,1,1,14.9983);

	this.instance_2 = new lib.DROPANIMATION("synched",7);
	this.instance_2.setTransform(-5.1,16.8,1,1,14.9983);

	this.instance_3 = new lib.DROPANIMATION("synched",10);
	this.instance_3.setTransform(120.85,16.8,1,1,14.9983);

	this.instance_4 = new lib.DROPANIMATION("synched",20);
	this.instance_4.setTransform(120.85,16.8,1,1,14.9983);

	this.instance_5 = new lib.DROPANIMATION("synched",0);
	this.instance_5.setTransform(120.85,16.8,1,1,14.9983);

	this.instance_6 = new lib.DROPANIMATION("synched",14);
	this.instance_6.setTransform(-65.1,16.8,1,1,14.9983);

	this.instance_7 = new lib.DROPANIMATION("synched",24);
	this.instance_7.setTransform(-65.1,16.8,1,1,14.9983);

	this.instance_8 = new lib.DROPANIMATION("synched",4);
	this.instance_8.setTransform(-65.1,16.8,1,1,14.9983);

	this.instance_9 = new lib.DROPANIMATION("synched",15);
	this.instance_9.setTransform(64.85,16.8,1,1,14.9983);

	this.instance_10 = new lib.DROPANIMATION("synched",25);
	this.instance_10.setTransform(64.85,16.8,1,1,14.9983);

	this.instance_11 = new lib.DROPANIMATION("synched",5);
	this.instance_11.setTransform(64.85,16.8,1,1,14.9983);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.button2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BUTTONEND_1();
	this.instance.setTransform(0,-59.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.4,-118.8,328.9,118.8);


(lib.Scene_1_rain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rain
	this.instance = new lib.RAIN_mc();
	this.instance.setTransform(693.1,325.75);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1463).to({_off:false},0).to({x:695.1,alpha:1},19).to({_off:true},69).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.playagain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.button2();
	this.instance.setTransform(0,-59.4,1,1,0,0,0,0,-59.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.4,-118.8,328.9,118.8);


(lib.lastbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.playagain();
	this.instance.setTransform(0,0,1,1,0,0,0,0,-59.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.4,-59.4,328.9,118.8);


(lib.Scene_1_last_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// last_button
	this.lastbutton = new lib.lastbutton();
	this.lastbutton.name = "lastbutton";
	this.lastbutton.setTransform(657.15,621.15);
	this.lastbutton._off = true;
	new cjs.ButtonHelper(this.lastbutton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.lastbutton).wait(2150).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.Yehuda_desertwithsound = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,62,220,306,402,463,574,712,801,858,1005,1080,1214,1351,1450,1548,1752,1820,1893,2094,2150];
	this.streamSoundSymbolsList[62] = [{id:"WalkingInTheWoodsOutdoorsFreeSoundEffectDownload",startFrame:62,endFrame:141,loop:1,offset:0}];
	this.streamSoundSymbolsList[306] = [{id:"text",startFrame:306,endFrame:335,loop:1,offset:0}];
	this.streamSoundSymbolsList[402] = [{id:"Q",startFrame:402,endFrame:439,loop:1,offset:0}];
	this.streamSoundSymbolsList[463] = [{id:"landing",startFrame:463,endFrame:504,loop:1,offset:0}];
	this.streamSoundSymbolsList[574] = [{id:"grass",startFrame:574,endFrame:633,loop:1,offset:0}];
	this.streamSoundSymbolsList[712] = [{id:"HOT3wav",startFrame:712,endFrame:722,loop:1,offset:0}];
	this.streamSoundSymbolsList[801] = [{id:"mainQwav",startFrame:801,endFrame:858,loop:1,offset:0}];
	this.streamSoundSymbolsList[858] = [{id:"QUETIONmp3copy",startFrame:858,endFrame:1005,loop:1,offset:0}];
	this.streamSoundSymbolsList[1005] = [{id:"steamappearwav",startFrame:1005,endFrame:1080,loop:1,offset:0}];
	this.streamSoundSymbolsList[1080] = [{id:"STEAMUPwavcopy",startFrame:1080,endFrame:1214,loop:1,offset:0}];
	this.streamSoundSymbolsList[1214] = [{id:"windwav",startFrame:1214,endFrame:1291,loop:1,offset:0}];
	this.streamSoundSymbolsList[1351] = [{id:"SHRINK",startFrame:1351,endFrame:1450,loop:1,offset:0}];
	this.streamSoundSymbolsList[1450] = [{id:"rain01wav",startFrame:1450,endFrame:1548,loop:1,offset:0}];
	this.streamSoundSymbolsList[1548] = [{id:"downwav",startFrame:1548,endFrame:1644,loop:1,offset:0}];
	this.streamSoundSymbolsList[1752] = [{id:"airreleasemp3copy2",startFrame:1752,endFrame:1820,loop:1,offset:0}];
	this.streamSoundSymbolsList[1820] = [{id:"norainwav",startFrame:1820,endFrame:1893,loop:1,offset:0}];
	this.streamSoundSymbolsList[1893] = [{id:"_62505__timkahn__fitz2wav",startFrame:1893,endFrame:1925,loop:1,offset:0}];
	this.streamSoundSymbolsList[2094] = [{id:"endwavcopy",startFrame:2094,endFrame:2119,loop:1,offset:0}];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}
	this.frame_62 = function() {
		var soundInstance = playSound("WalkingInTheWoodsOutdoorsFreeSoundEffectDownload",0);
		this.InsertIntoSoundStreamData(soundInstance,62,141,1);
	}
	this.frame_220 = function() {
		if(this.button.parent == undefined || this.button.parent == this)
		this.button = this.button.button;
		this.stop();
		this.button.on('click', function(){
			this.parent.parent.play();
		});
	}
	this.frame_306 = function() {
		var soundInstance = playSound("text",0);
		this.InsertIntoSoundStreamData(soundInstance,306,335,1);
	}
	this.frame_402 = function() {
		var soundInstance = playSound("Q",0);
		this.InsertIntoSoundStreamData(soundInstance,402,439,1);
	}
	this.frame_463 = function() {
		var soundInstance = playSound("landing",0);
		this.InsertIntoSoundStreamData(soundInstance,463,504,1);
	}
	this.frame_574 = function() {
		var soundInstance = playSound("grass",0);
		this.InsertIntoSoundStreamData(soundInstance,574,633,1);
	}
	this.frame_712 = function() {
		var soundInstance = playSound("HOT3wav",0);
		this.InsertIntoSoundStreamData(soundInstance,712,722,1);
	}
	this.frame_801 = function() {
		var soundInstance = playSound("mainQwav",0);
		this.InsertIntoSoundStreamData(soundInstance,801,858,1);
	}
	this.frame_858 = function() {
		var soundInstance = playSound("QUETIONmp3copy",0);
		this.InsertIntoSoundStreamData(soundInstance,858,1005,1);
	}
	this.frame_1005 = function() {
		var soundInstance = playSound("steamappearwav",0);
		this.InsertIntoSoundStreamData(soundInstance,1005,1080,1);
	}
	this.frame_1080 = function() {
		var soundInstance = playSound("STEAMUPwavcopy",0);
		this.InsertIntoSoundStreamData(soundInstance,1080,1214,1);
	}
	this.frame_1214 = function() {
		var soundInstance = playSound("windwav",0);
		this.InsertIntoSoundStreamData(soundInstance,1214,1291,1);
	}
	this.frame_1351 = function() {
		var soundInstance = playSound("SHRINK",0);
		this.InsertIntoSoundStreamData(soundInstance,1351,1450,1);
	}
	this.frame_1450 = function() {
		var soundInstance = playSound("rain01wav",0);
		this.InsertIntoSoundStreamData(soundInstance,1450,1548,1);
	}
	this.frame_1548 = function() {
		var soundInstance = playSound("downwav",0);
		this.InsertIntoSoundStreamData(soundInstance,1548,1644,1);
	}
	this.frame_1752 = function() {
		var soundInstance = playSound("airreleasemp3copy2",0);
		this.InsertIntoSoundStreamData(soundInstance,1752,1820,1);
	}
	this.frame_1820 = function() {
		var soundInstance = playSound("norainwav",0);
		this.InsertIntoSoundStreamData(soundInstance,1820,1893,1);
	}
	this.frame_1893 = function() {
		var soundInstance = playSound("_62505__timkahn__fitz2wav",0);
		this.InsertIntoSoundStreamData(soundInstance,1893,1925,1);
	}
	this.frame_2094 = function() {
		var soundInstance = playSound("endwavcopy",0);
		this.InsertIntoSoundStreamData(soundInstance,2094,2119,1);
	}
	this.frame_2150 = function() {
		this.lastbutton = this.last_button.lastbutton;
		this.___loopingOver___ = true;
		this.stop();
		this.lastbutton.on('click', function(){
		this.parent.parent.gotoAndPlay(1);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(62).call(this.frame_62).wait(158).call(this.frame_220).wait(86).call(this.frame_306).wait(96).call(this.frame_402).wait(61).call(this.frame_463).wait(111).call(this.frame_574).wait(138).call(this.frame_712).wait(89).call(this.frame_801).wait(57).call(this.frame_858).wait(147).call(this.frame_1005).wait(75).call(this.frame_1080).wait(134).call(this.frame_1214).wait(137).call(this.frame_1351).wait(99).call(this.frame_1450).wait(98).call(this.frame_1548).wait(204).call(this.frame_1752).wait(68).call(this.frame_1820).wait(73).call(this.frame_1893).wait(201).call(this.frame_2094).wait(56).call(this.frame_2150).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640.1,360.25,0.3925,0.3925,0,0,0,1.2,1.2);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({regX:2.5,regY:3.1,scaleX:0.9999,scaleY:0.9999,x:639.6,y:359.55},61).wait(2090));

	// last_button_obj_
	this.last_button = new lib.Scene_1_last_button();
	this.last_button.name = "last_button";
	this.last_button.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.last_button.depth = 0;
	this.last_button.isAttachedToCamera = 0
	this.last_button.isAttachedToMask = 0
	this.last_button.layerDepth = 0
	this.last_button.layerIndex = 0
	this.last_button.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.last_button).wait(2150).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1));

	// last_text_obj_
	this.last_text = new lib.Scene_1_last_text();
	this.last_text.name = "last_text";
	this.last_text.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.last_text.depth = 0;
	this.last_text.isAttachedToCamera = 0
	this.last_text.isAttachedToMask = 0
	this.last_text.layerDepth = 0
	this.last_text.layerIndex = 1
	this.last_text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.last_text).wait(2094).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(57));

	// last_obj_
	this.last = new lib.Scene_1_last();
	this.last.name = "last";
	this.last.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.last.depth = 0;
	this.last.isAttachedToCamera = 0
	this.last.isAttachedToMask = 0
	this.last.layerDepth = 0
	this.last.layerIndex = 2
	this.last.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.last).wait(2033).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(118));

	// tree_obj_
	this.tree = new lib.Scene_1_tree();
	this.tree.name = "tree";
	this.tree.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.tree.depth = 0;
	this.tree.isAttachedToCamera = 0
	this.tree.isAttachedToMask = 0
	this.tree.layerDepth = 0
	this.tree.layerIndex = 3
	this.tree.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tree).wait(1921).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(230));

	// NO_RAIN_obj_
	this.NO_RAIN = new lib.Scene_1_NO_RAIN();
	this.NO_RAIN.name = "NO_RAIN";
	this.NO_RAIN.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.NO_RAIN.depth = 0;
	this.NO_RAIN.isAttachedToCamera = 0
	this.NO_RAIN.isAttachedToMask = 0
	this.NO_RAIN.layerDepth = 0
	this.NO_RAIN.layerIndex = 4
	this.NO_RAIN.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.NO_RAIN).wait(1823).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(328));

	// cloud3_obj_
	this.cloud3 = new lib.Scene_1_cloud3();
	this.cloud3.name = "cloud3";
	this.cloud3.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.cloud3.depth = 0;
	this.cloud3.isAttachedToCamera = 0
	this.cloud3.isAttachedToMask = 0
	this.cloud3.layerDepth = 0
	this.cloud3.layerIndex = 5
	this.cloud3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud3).wait(1140).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1011));
	this.cloud3.addEventListener("tick", AdobeAn.handleFilterCache);

	// cloud2_obj_
	this.cloud2 = new lib.Scene_1_cloud2();
	this.cloud2.name = "cloud2";
	this.cloud2.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.cloud2.depth = 0;
	this.cloud2.isAttachedToCamera = 0
	this.cloud2.isAttachedToMask = 0
	this.cloud2.layerDepth = 0
	this.cloud2.layerIndex = 6
	this.cloud2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud2).wait(1137).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1014));
	this.cloud2.addEventListener("tick", AdobeAn.handleFilterCache);

	// cloud1_obj_
	this.cloud1 = new lib.Scene_1_cloud1();
	this.cloud1.name = "cloud1";
	this.cloud1.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.cloud1.depth = 0;
	this.cloud1.isAttachedToCamera = 0
	this.cloud1.isAttachedToMask = 0
	this.cloud1.layerDepth = 0
	this.cloud1.layerIndex = 7
	this.cloud1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud1).wait(1133).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1018));
	this.cloud1.addEventListener("tick", AdobeAn.handleFilterCache);

	// rain_obj_
	this.rain = new lib.Scene_1_rain();
	this.rain.name = "rain";
	this.rain.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.rain.depth = 0;
	this.rain.isAttachedToCamera = 0
	this.rain.isAttachedToMask = 0
	this.rain.layerDepth = 0
	this.rain.layerIndex = 8
	this.rain.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.rain).wait(1463).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(688));

	// wind_obj_
	this.wind = new lib.Scene_1_wind();
	this.wind.name = "wind";
	this.wind.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.wind.depth = 0;
	this.wind.isAttachedToCamera = 0
	this.wind.isAttachedToMask = 0
	this.wind.layerDepth = 0
	this.wind.layerIndex = 9
	this.wind.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.wind).wait(1213).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(938));
	this.wind.addEventListener("tick", AdobeAn.handleFilterCache);

	// vapor3_obj_
	this.vapor3 = new lib.Scene_1_vapor3();
	this.vapor3.name = "vapor3";
	this.vapor3.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.vapor3.depth = 0;
	this.vapor3.isAttachedToCamera = 0
	this.vapor3.isAttachedToMask = 0
	this.vapor3.layerDepth = 0
	this.vapor3.layerIndex = 10
	this.vapor3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.vapor3).wait(1007).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1144));

	// sun1_obj_
	this.sun1 = new lib.Scene_1_sun1();
	this.sun1.name = "sun1";
	this.sun1.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.sun1.depth = 0;
	this.sun1.isAttachedToCamera = 0
	this.sun1.isAttachedToMask = 0
	this.sun1.layerDepth = 0
	this.sun1.layerIndex = 11
	this.sun1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun1).wait(38).to({regX:145.5,regY:81.2,scaleX:1.2972,scaleY:1.2972,x:0.1},0).wait(926).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1187));

	// text_explain_obj_
	this.text_explain = new lib.Scene_1_text_explain();
	this.text_explain.name = "text_explain";
	this.text_explain.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.text_explain.depth = 0;
	this.text_explain.isAttachedToCamera = 0
	this.text_explain.isAttachedToMask = 0
	this.text_explain.layerDepth = 0
	this.text_explain.layerIndex = 12
	this.text_explain.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text_explain).wait(256).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1895));

	// intro_text_obj_
	this.intro_text = new lib.Scene_1_intro_text();
	this.intro_text.name = "intro_text";
	this.intro_text.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.intro_text.depth = 0;
	this.intro_text.isAttachedToCamera = 0
	this.intro_text.isAttachedToMask = 0
	this.intro_text.layerDepth = 0
	this.intro_text.layerIndex = 13
	this.intro_text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.intro_text).wait(164).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1987));

	// hot_obj_
	this.hot = new lib.Scene_1_hot();
	this.hot.name = "hot";
	this.hot.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.hot.depth = 0;
	this.hot.isAttachedToCamera = 0
	this.hot.isAttachedToMask = 0
	this.hot.layerDepth = 0
	this.hot.layerIndex = 14
	this.hot.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.hot).wait(698).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1453));

	// grass_obj_
	this.grass = new lib.Scene_1_grass();
	this.grass.name = "grass";
	this.grass.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.grass.depth = 0;
	this.grass.isAttachedToCamera = 0
	this.grass.isAttachedToMask = 0
	this.grass.layerDepth = 0
	this.grass.layerIndex = 15
	this.grass.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.grass).wait(574).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1577));

	// text_midbaryehuda_obj_
	this.text_midbaryehuda = new lib.Scene_1_text_midbaryehuda();
	this.text_midbaryehuda.name = "text_midbaryehuda";
	this.text_midbaryehuda.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.text_midbaryehuda.depth = 0;
	this.text_midbaryehuda.isAttachedToCamera = 0
	this.text_midbaryehuda.isAttachedToMask = 0
	this.text_midbaryehuda.layerDepth = 0
	this.text_midbaryehuda.layerIndex = 16
	this.text_midbaryehuda.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text_midbaryehuda).wait(464).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1687));

	// are3_obj_
	this.are3 = new lib.Scene_1_are3();
	this.are3.name = "are3";
	this.are3.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.are3.depth = 0;
	this.are3.isAttachedToCamera = 0
	this.are3.isAttachedToMask = 0
	this.are3.layerDepth = 0
	this.are3.layerIndex = 17
	this.are3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.are3).wait(274).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1877));

	// are_2_obj_
	this.are_2 = new lib.Scene_1_are_2();
	this.are_2.name = "are_2";
	this.are_2.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.are_2.depth = 0;
	this.are_2.isAttachedToCamera = 0
	this.are_2.isAttachedToMask = 0
	this.are_2.layerDepth = 0
	this.are_2.layerIndex = 18
	this.are_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.are_2).wait(270).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1881));

	// area1_obj_
	this.area1 = new lib.Scene_1_area1();
	this.area1.name = "area1";
	this.area1.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.area1.depth = 0;
	this.area1.isAttachedToCamera = 0
	this.area1.isAttachedToMask = 0
	this.area1.layerDepth = 0
	this.area1.layerIndex = 19
	this.area1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.area1).wait(266).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1885));

	// QUETION_obj_
	this.QUETION = new lib.Scene_1_QUETION();
	this.QUETION.name = "QUETION";
	this.QUETION.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.QUETION.depth = 0;
	this.QUETION.isAttachedToCamera = 0
	this.QUETION.isAttachedToMask = 0
	this.QUETION.layerDepth = 0
	this.QUETION.layerIndex = 20
	this.QUETION.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.QUETION).wait(372).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1779));

	// mainquetion_obj_
	this.mainquetion = new lib.Scene_1_mainquetion();
	this.mainquetion.name = "mainquetion";
	this.mainquetion.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.mainquetion.depth = 0;
	this.mainquetion.isAttachedToCamera = 0
	this.mainquetion.isAttachedToMask = 0
	this.mainquetion.layerDepth = 0
	this.mainquetion.layerIndex = 21
	this.mainquetion.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.mainquetion).wait(790).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1361));

	// desert_obj_
	this.desert = new lib.Scene_1_desert();
	this.desert.name = "desert";
	this.desert.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.desert.depth = 0;
	this.desert.isAttachedToCamera = 0
	this.desert.isAttachedToMask = 0
	this.desert.layerDepth = 0
	this.desert.layerIndex = 22
	this.desert.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.desert).wait(790).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1361));

	// tavlit_obj_
	this.tavlit = new lib.Scene_1_tavlit();
	this.tavlit.name = "tavlit";
	this.tavlit.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.tavlit.depth = 0;
	this.tavlit.isAttachedToCamera = 0
	this.tavlit.isAttachedToMask = 0
	this.tavlit.layerDepth = 0
	this.tavlit.layerIndex = 23
	this.tavlit.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tavlit).wait(221).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1930));

	// button_obj_
	this.button = new lib.Scene_1_button();
	this.button.name = "button";
	this.button.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.button.depth = 0;
	this.button.isAttachedToCamera = 0
	this.button.isAttachedToMask = 0
	this.button.layerDepth = 0
	this.button.layerIndex = 24
	this.button.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.button).wait(220).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:-0.05},0).wait(1931));

	// guide_obj_
	this.guide = new lib.Scene_1_guide();
	this.guide.name = "guide";
	this.guide.setTransform(0.05,0,2.5477,2.5477,0,0,0,388.4,218.4);
	this.guide.depth = 0;
	this.guide.isAttachedToCamera = 0
	this.guide.isAttachedToMask = 0
	this.guide.layerDepth = 0
	this.guide.layerIndex = 25
	this.guide.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.guide).wait(62).to({regX:-2.9,regY:-3.5,scaleX:1.0001,scaleY:1.0001,x:367.85,y:619.8},0).wait(1).to({regX:0,regY:0,x:370.7502,y:623.3002},0).wait(78).to({regX:-2.9,regY:-3.5,x:367.85,y:619.8},0).to({x:-0.05,y:0},1).wait(2009));

	// tree1_obj_
	this.tree1 = new lib.Scene_1_tree1();
	this.tree1.name = "tree1";
	this.tree1.setTransform(540.15,396.95,2.5477,2.5477,0,0,0,600.4,374.2);
	this.tree1.depth = 0;
	this.tree1.isAttachedToCamera = 0
	this.tree1.isAttachedToMask = 0
	this.tree1.layerDepth = 0
	this.tree1.layerIndex = 26
	this.tree1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tree1).wait(221).to({regX:537.1,regY:393.4,scaleX:1.0001,scaleY:1.0001,x:540,y:396.9},0).wait(1930));

	// bachground_obj_
	this.bachground = new lib.Scene_1_bachground();
	this.bachground.name = "bachground";
	this.bachground.setTransform(583.7,471.1,2.5477,2.5477,0,0,0,617.5,403.3);
	this.bachground.depth = 0;
	this.bachground.isAttachedToCamera = 0
	this.bachground.isAttachedToMask = 0
	this.bachground.layerDepth = 0
	this.bachground.layerIndex = 27
	this.bachground.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bachground).wait(35).to({regX:597,regY:441.2,scaleX:1.3495,scaleY:1.3495,x:583.55,y:471.15},0).wait(186).to({regX:580.6,regY:467.6,scaleX:1.0001,scaleY:1.0001,x:583.5},0).wait(1930));
	this.bachground.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1524.6,167.1,2829,1125.9);
// library properties:
lib.properties = {
	id: '7EA2ACC78060EB4C950AAFABEB570454',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_137.png?1664997719171", id:"CachedBmp_137"},
		{src:"images/CachedBmp_136.png?1664997719171", id:"CachedBmp_136"},
		{src:"images/CachedBmp_135.png?1664997719171", id:"CachedBmp_135"},
		{src:"images/CachedBmp_134.png?1664997719171", id:"CachedBmp_134"},
		{src:"images/CachedBmp_132.png?1664997719171", id:"CachedBmp_132"},
		{src:"images/CachedBmp_131.png?1664997719171", id:"CachedBmp_131"},
		{src:"images/CachedBmp_128.png?1664997719171", id:"CachedBmp_128"},
		{src:"images/CachedBmp_122.png?1664997719171", id:"CachedBmp_122"},
		{src:"images/CachedBmp_121.png?1664997719171", id:"CachedBmp_121"},
		{src:"images/CachedBmp_120.png?1664997719171", id:"CachedBmp_120"},
		{src:"images/CachedBmp_119.png?1664997719171", id:"CachedBmp_119"},
		{src:"images/CachedBmp_118.png?1664997719171", id:"CachedBmp_118"},
		{src:"images/CachedBmp_117.png?1664997719171", id:"CachedBmp_117"},
		{src:"images/CachedBmp_114.png?1664997719171", id:"CachedBmp_114"},
		{src:"images/Yehuda_desert_ with sound_atlas_1.png?1664997718767", id:"Yehuda_desert_ with sound_atlas_1"},
		{src:"images/Yehuda_desert_ with sound_atlas_2.png?1664997718771", id:"Yehuda_desert_ with sound_atlas_2"},
		{src:"images/Yehuda_desert_ with sound_atlas_3.png?1664997718772", id:"Yehuda_desert_ with sound_atlas_3"},
		{src:"images/Yehuda_desert_ with sound_atlas_4.png?1664997718773", id:"Yehuda_desert_ with sound_atlas_4"},
		{src:"images/Yehuda_desert_ with sound_atlas_5.png?1664997718773", id:"Yehuda_desert_ with sound_atlas_5"},
		{src:"images/Yehuda_desert_ with sound_atlas_6.png?1664997718773", id:"Yehuda_desert_ with sound_atlas_6"},
		{src:"images/Yehuda_desert_ with sound_atlas_7.png?1664997718773", id:"Yehuda_desert_ with sound_atlas_7"},
		{src:"sounds/_62505__timkahn__fitz2wav.mp3?1664997719171", id:"_62505__timkahn__fitz2wav"},
		{src:"sounds/airreleasemp3copy2.mp3?1664997719171", id:"airreleasemp3copy2"},
		{src:"sounds/downwav.mp3?1664997719171", id:"downwav"},
		{src:"sounds/endwavcopy.mp3?1664997719171", id:"endwavcopy"},
		{src:"sounds/grass.mp3?1664997719171", id:"grass"},
		{src:"sounds/HOT3wav.mp3?1664997719171", id:"HOT3wav"},
		{src:"sounds/landing.mp3?1664997719171", id:"landing"},
		{src:"sounds/mainQwav.mp3?1664997719171", id:"mainQwav"},
		{src:"sounds/norainwav.mp3?1664997719171", id:"norainwav"},
		{src:"sounds/Q.mp3?1664997719171", id:"Q"},
		{src:"sounds/QUETIONmp3copy.mp3?1664997719171", id:"QUETIONmp3copy"},
		{src:"sounds/rain01wav.mp3?1664997719171", id:"rain01wav"},
		{src:"sounds/SHRINK.mp3?1664997719171", id:"SHRINK"},
		{src:"sounds/steamappearwav.mp3?1664997719171", id:"steamappearwav"},
		{src:"sounds/STEAMUPwavcopy.mp3?1664997719171", id:"STEAMUPwavcopy"},
		{src:"sounds/text.mp3?1664997719171", id:"text"},
		{src:"sounds/WalkingInTheWoodsOutdoorsFreeSoundEffectDownload.mp3?1664997719171", id:"WalkingInTheWoodsOutdoorsFreeSoundEffectDownload"},
		{src:"sounds/windwav.mp3?1664997719171", id:"windwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7EA2ACC78060EB4C950AAFABEB570454'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;