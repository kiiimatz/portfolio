<script lang="ts">
    import AnimatedTitle from "$lib/components/original/animated-title.svelte";
    import DelayContent from "$lib/components/original/delay-content.svelte";
    import HovercardAny from "$lib/components/original/hovercard-any.svelte";
    import Icon from "@iconify/svelte"
</script>

<div class="writer tracking-tight flex items-center justify-center h-screen relative">
    <a href="/labs" class="group fixed top-14 z-20 left-0 w-full flex items-center justify-center h-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-all duration-300 hover:border-primary/40 border-t-[1px] border-b-[1px] border-dashed border-primary/15 cursor-pointer">
        <div class="flex items-center gap-1 text-primary/50 transition-all duration-300 group-hover:text-primary/80">
            <Icon icon="mingcute:ai-line" class="text-[17px] mb-[1px]"/>
            <p class="text-[13px] mt-[2px]">Kiiimatz Studio is here. Learn more →</p>
        </div>
    </a>
    <div>
        <div class="w-full px-[8%] md:w-[35rem]">
            <AnimatedTitle class="sans-bx text-[30px]">kiiimatz</AnimatedTitle>
            <div class="w-full flex items-center justify-center h-8 rounded-[2px] bg-gradient-to-r from-transparent via-primary/10 to-transparent border-[1px] border-dashed border-primary/15">
                <div class="flex items-center gap-1.5 text-primary/60">
                    <Icon icon="mingcute:ai-line" class="text-[16px] sm:text-[17px]"/>
                    <p class="text-[11.5px] sm:text-[13px] mt-[5px] sm:mt-[3px]">I am kiiimatz, a fanatical open sourceror.</p>
                </div>
            </div>
            <div class="mt-3.5 text-[13px]">
                <DelayContent delay={0}>
                    <div class="flex items-center gap-2">
                        <p class="text-primary/70 dark:text-primary/45">working at</p>
                        <HovercardAny description="This is my team." href="/studio">Kiiimatz Studio</HovercardAny>
                    </div>
                </DelayContent>
                <DelayContent delay={50}>
                    <div class="flex items-center">
                        <p class="text-primary/70 dark:text-primary/45 mr-1.5">creator of</p>
                        <!-- <HovercardAny description="Simple and customized note app." href="https://k.hideko.rest">Kustom</HovercardAny>
                        <p class="mr-1.5 text-primary/45">,</p> -->
                        <HovercardAny description="Self-hosted reverse tunnel. TCP & UDP." href="https://github.com/kiiimatz/tailway">tailway</HovercardAny>
                        <p class="mr-1.5 text-primary/45">,</p>
                        <HovercardAny description="Packed with convenience." href="https://github.com/hideko-dev/complex">complex</HovercardAny>
                        <p class="mr-1.5 text-primary/45">,</p>
                        <HovercardAny description="Monitor servers efficiently." href="https://github.com/kiiimatz/watchdog">watchdog</HovercardAny>
                        <p class="mr-1.5 text-primary/45">,</p>
                        <HovercardAny description="Lightweight font management for SvelteKit." href="https://github.com/kiiimatz/fontrum">fontrum</HovercardAny>
                    </div>
                </DelayContent>
                <DelayContent delay={100}>
                    <div class="flex items-center gap-2">
                        <p class="text-primary/70 dark:text-primary/45">working before at</p>
                        <HovercardAny description="The team that operates Tor nodes." href="https://github.com/onioncomplex">Onion Complex</HovercardAny>
                    </div>
                </DelayContent>
            </div>
            <div class="mt-3.5 text-[13px] text-primary/70 dark:text-primary/30 flex flex-col">
                <DelayContent delay={150}>
                    <p>Hello, I am a full stack engineer.</p>
                </DelayContent>
                <DelayContent delay={200}>
                    <p>I am mainly good at front-end development, But of course I am also good at backend and have touched various stacks.</p>
                </DelayContent>
                <DelayContent delay={200}>
                    <p>I have been exposed to various technologies, various designs, and have worked with people from many countries.</p>
                </DelayContent>
            </div>
        </div>
    </div>
</div>
